import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { RoleModule } from '@Role/role.module';
import { PasswordService } from '@Helpers/password/password.service';
import { GettersController } from './v1/getters/getters.controller';
import { AddController } from './v1/add/add.controller';
import { UpdateController } from './v1/update/update.controller';
import { MongooseService } from '@Helpers/mongoose/mongoose.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RoleModule,
  ],
  exports: [MongooseModule, UserService],
  providers: [UserService, PasswordService, MongooseService],
  controllers: [GettersController, AddController, UpdateController],
})
export class UserModule {}
