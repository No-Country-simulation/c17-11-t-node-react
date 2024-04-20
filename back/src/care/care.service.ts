import { Injectable } from '@nestjs/common';
import { CreateCareDTO, UpdateCareDTO } from './dto/care.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Care } from './schemas/care.schema';
import { Model, Types } from 'mongoose';
import { MongooseService } from '@Helpers/mongoose/mongoose.service';
import { ServiceService } from '@Service/service.service';
import { Caretaker } from '@Caretaker/schemas/caretaker.schema';
import { CaretakerService } from '@Caretaker/caretaker.service';

@Injectable()
export class CareService {
  constructor(
    @InjectModel(Care.name) private careModel: Model<Care>,
    @InjectModel(Caretaker.name) private caretakerModel: Model<Caretaker>,
    private mongooseService: MongooseService,
    private serviceService: ServiceService,
    private caretakerService: CaretakerService,
  ) {}

  async create(data: CreateCareDTO, userId: string) {
    const { pet, services, ...req } = data;

    const servicePrices = await Promise.all(
      services.map(async (serviceId) => {
        const service = await this.serviceService.findById(serviceId);
        return service.price;
      }),
    );

    const totalPrice = servicePrices.reduce((total, price) => total + price, 0);

    return this.careModel.create({
      user: this.mongooseService.stringToObjectId(userId),
      pet: this.mongooseService.stringToObjectId(pet),
      services: this.mongooseService.stringToObjectId(services),
      date: new Date(),
      totalPrice: totalPrice,
      status: 'pending',
      state: false,
      ...req,
    });
  }

  async findAll() {
    return this.careModel
      .find()
      .populate({ path: 'user', select: 'first_name last_name picture' })
      .populate({ path: 'pet', select: 'name' })
      .populate({ path: 'services', select: '' })
      .populate({ path: 'caretaker', select: '' })
      .exec();
  }

  async findAllPaginate(page: number, limit: number) {
    const count = await this.careModel.estimatedDocumentCount();
    const query = this.careModel
      .find()
      .populate({ path: 'user', select: 'first_name last_name picture' })
      .populate({ path: 'pet', select: 'name' })
      .populate({ path: 'services', select: '' })
      .populate({ path: 'caretaker', select: '' });

    return this.mongooseService.paginate<Care>(query, count, page, limit);
  }

  async findById(id: string) {
    return this.careModel
      .findById(id)
      .populate({ path: 'user', select: 'first_name last_name picture' })
      .populate({ path: 'pet', select: 'name' })
      .populate({ path: 'services', select: '' })
      .populate({ path: 'caretaker', select: '' })
      .exec();
  }

  async findByCaretaker(caretakerId: string) {
    const caretakerObjectId = new Types.ObjectId(caretakerId);
    return this.careModel.find({ caretaker: caretakerObjectId }).exec();
  }

  async update(
    data: UpdateCareDTO,
    userId: string,
    role: string,
    careId: string,
  ) {
    const { status, description, ...req } = data;

    if (role === 'caretaker') {
      const caretaker = await this.caretakerService.findOneByUseId(userId);

      return this.careModel.findOneAndUpdate(
        { _id: this.mongooseService.stringToObjectId(careId) },
        {
          caretaker: caretaker._id,
          status: status,
          state: status === 'completed',
          ...req,
        },
        { new: true },
      );
    } else if (role === 'owner') {
      return this.careModel.findOneAndUpdate(
        {
          _id: this.mongooseService.stringToObjectId(careId),
        },
        {
          description: description,
          ...req,
        },
        {
          new: true,
        },
      );
    }
  }

  async delete(careId: string) {
    return await this.careModel.findByIdAndDelete(careId).exec();
  }
}
