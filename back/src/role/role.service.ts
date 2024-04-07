import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './schemas/role.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {
    const count = roleModel.estimatedDocumentCount();
    count.then((value) => {
      if (value == 0) {
        roleModel.create(
          { name: 'admin' },
          { name: 'caretaker' },
          { name: 'client' },
        );
      }
    });
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }
}
