import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Roles } from '@Decorators/role.decorator';
import { UserService } from '@User/user.service';
import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.USER,
})
export class GettersController {
  constructor(private userService: UserService) {}

  @Roles('admin')
  @Get()
  async getAll() {
    try {
      const users = await this.userService.findAll();

      return {
        success: true,
        data: users,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }

  @Roles('admin')
  @Get('one/:id')
  async getOneById(@Param('id') id: string) {
    try {
      const user = await this.userService.findById(id);

      if (user == null) {
        throw new Error('null');
      }

      return {
        success: true,
        data: user,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'null') {
          throw new NotFoundException({
            success: false,
            message: 'User not found',
          });
        }
      }
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }

  @Get('profile')
  async getProfile(@Req() req: Request) {
    try {
      const user = await this.userService.findById(req.user['userId']);

      return {
        success: true,
        data: user,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
