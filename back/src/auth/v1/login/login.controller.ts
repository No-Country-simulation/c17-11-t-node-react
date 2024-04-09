import { AuthService } from '@Auth/auth.service';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
import { LocalAuthGuard } from '@Guards/local-auth/local-auth.guard';
import {
  Controller,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.AUTH,
})
export class LoginController {
  constructor(private authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    try {
      const token = await this.authService.login(req.user['data']._doc._id);
      return {
        success: true,
        data: {
          access_token: token,
          role: req.user['data']._doc.role.name,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
