import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {
    const count = this.roleModel.estimatedDocumentCount();
    count.then((value) => {
      if (value == 0) {
        this.roleModel.create(
          { name: 'admin' },
          { name: 'caretaker' },
          { name: 'client' },
        );
      }
    });
  }

  async findAll(): Promise<RoleDocument[]> {
    return this.roleModel.find().exec();
  }

  async findOneByName(name: string): Promise<RoleDocument> {
    return this.roleModel.findOne({ name }).exec();
  }
}
