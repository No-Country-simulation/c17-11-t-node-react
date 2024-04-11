import { AuthService } from '@Auth/auth.service';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
import { RoleService } from '@Role/role.service';
import { CreateUserDTO } from '@User/dto/user.dto';
import { UserService } from '@User/user.service';
import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.AUTH,
})
export class RegisterController {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private authService: AuthService,
  ) {}

  @Public()
  @Post('register')
  async register(@Body() data: CreateUserDTO) {
    try {
      const { role, first_name, last_name, email, password } = data;
      const isValidRole = await this.roleService.findById(role);
      if (isValidRole == null) throw new Error('invalid_role');

      const userCreated = await this.userService.create({
        role,
        first_name,
        last_name,
        email,
        email_verified: true,
        blocking: false,
        password,
        username:
          first_name.trim().replace(/\s+/g, '') +
          new Date().valueOf().toString(),
      });

      userCreated.password = '';
      const token = await this.authService.login(
        userCreated._id.toString(),
        userCreated.role['_id'],
      );

      return {
        success: true,
        data: {
          access_token: token,
          user: userCreated,
        },
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message == 'invalid_role') {
          throw new BadRequestException({
            success: false,
            message: 'Role invalid',
          });
        }
      }

      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
