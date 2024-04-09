import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RoleService } from '@Role/role.service';
import { PasswordService } from '@Helpers/password/password.service';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';
import { EMAIL } from '@Constants/regex';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private roleService: RoleService,
    private readonly passwordService: PasswordService,
  ) {
    this.setup()
      .then()
      .catch((err) => console.log(err));
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().populate('role').exec();
  }

  // async findAllPaginate() {
  //   return this.userModel.
  // }

  async findById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id).populate('role').exec();
  }

  async findUserByUsernameOrEmail(username: string): Promise<User> {
    const query: {
      email?: string;
      username?: string;
    } = {};

    if (EMAIL.test(username)) {
      query.email = username;
    } else {
      query.username = username;
    }
    return this.userModel.findOne(query).populate('role').exec();
  }

  async create(data: CreateUserDTO) {
    const { password, ...req } = data;
    const hash =
      password != undefined
        ? await this.passwordService.hash(password)
        : undefined;

    return this.userModel.create({ password: hash, ...req });
  }

  async update(id: string, data: UpdateUserDTO) {
    const { password, current_password, ...req } = data;

    if ((password && !current_password) || (!password && current_password)) {
      new Error('current or new password has not been sent');
    }

    let hash: string;
    if (password && current_password) {
      if (password === current_password) new Error('matching passwords');
      const user = await this.userModel.findById(id);
      const comparePassword = await this.passwordService.compare(
        current_password,
        user.password,
      );

      if (!comparePassword) new Error('incorrect current password');

      hash = await this.passwordService.hash(password);
    }

    if (!hash) {
      return this.userModel
        .findByIdAndUpdate(id, {
          password: hash,
          ...req,
        })
        .exec();
    } else {
      return this.userModel
        .findByIdAndUpdate(id, {
          ...req,
        })
        .exec();
    }
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  private async setup() {
    const count = await this.userModel.estimatedDocumentCount();
    if (count == 0) {
      const role = await this.roleService.findOneByName('admin');

      const hash = await this.passwordService.hash('admin@123');

      this.userModel.create({
        name: 'admin',
        dni: 1234567890,
        birthday: new Date('2000-10-11T00:00:00'),
        picture: '',
        email: 'admin@example.com',
        email_verified: true,
        username: 'admin',
        password: hash,
        role: role._id,
      });
    }
  }
}
