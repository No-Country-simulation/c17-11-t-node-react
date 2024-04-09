import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { RoleModule } from '@Role/role.module';
import { PasswordService } from '@Helpers/password/password.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    RoleModule,
  ],
  exports: [MongooseModule, UserService],
  providers: [UserService, PasswordService],
})
export class UserModule {}
