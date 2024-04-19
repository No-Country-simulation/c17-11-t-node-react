import { Injectable } from '@nestjs/common';
import { Pet } from './schemas/pet.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDTO, UpdatePetDTO } from './dto/pet.dto';
import { MongooseService } from '@Helpers/mongoose/mongoose.service';

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet.name) private petModel: Model<Pet>,
    private mongooseService: MongooseService,
  ) {}

  async create(data: CreatePetDTO) {
    try {
      return await this.petModel.create(data);
    } catch (error) {
      throw new Error(`Error creating pet: ${error.message}`);
    }
  }
  async findAll() {
    try {
      return this.petModel.find().exec();
    } catch (error) {
      throw new Error(`Error finding all pets: ${error.message}`);
    }
  }

  async findAllPaginate(page: number, limit: number) {
    try {
      const count = await this.petModel.estimatedDocumentCount();
      const query = this.petModel.find();
      return this.mongooseService.paginate<Pet>(query, count, page, limit);
    } catch (error) {
      throw new Error(
        `Error finding all pets with pagination: ${error.message}`,
      );
    }
  }

  async findById(id: string) {
    try {
      return this.petModel.findById(id);
    } catch (error) {
      throw new Error(`Error finding pet by id: ${error.message}`);
    }
  }

  async update(id: string, data: UpdatePetDTO) {
    try {
      return this.petModel.findByIdAndUpdate(id, data, { new: true }).exec();
    } catch (error) {
      throw new Error(`Error updating pet: ${error.message}`);
    }
  }

  async delete(petId: string) {
    try {
      return await this.petModel.findByIdAndDelete(petId).exec();
    } catch (error) {
      throw new Error(`Error deleting pet: ${error.message}`);
    }
  }
}
