import { PasswordService } from '@Helpers/password/password.service';
import { UserService } from '@User/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findUserByUsernameOrEmail(username);

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    if (!user.email_verified) {
      return {
        success: false,
        message: 'Email no verified',
      };
    }

    const validatePass = await this.passwordService.compare(
      pass,
      user.password,
    );

    if (!validatePass) {
      return {
        success: false,
        message: 'incorrect password',
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      success: true,
      data: result,
    };
  }

  async login(userId: string, expiresIn?: string): Promise<string> {
    if (!expiresIn) expiresIn = '24h';

    const payload = {
      sub: userId,
    };

    return this.jwtService.signAsync(payload, { expiresIn });
  }
}
