import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@User/user.module';
import { PasswordService } from '@Helpers/password/password.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { LoginController } from './v1/login/login.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { GoogleStrategy } from './strategy/google.strategy';
import { RoleModule } from '@Role/role.module';

@Module({
  providers: [
    AuthService,
    PasswordService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
  ],
  imports: [
    UserModule,
    RoleModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get('jwt_secret'),
      }),
    }),
    PassportModule,
  ],
  controllers: [LoginController],
})
export class AuthModule {}
