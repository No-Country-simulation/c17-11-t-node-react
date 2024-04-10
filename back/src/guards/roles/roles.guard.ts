import { RoleService } from '@Role/role.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private roleService: RoleService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get('roles', context.getHandler());

    if (!roles) return true;

    const request = context.switchToHttp().getRequest();
    const roleId = request.user['roleId'];

    return await this.matchRole(roles, roleId);
  }

  private async matchRole(role: string[], roleId: string): Promise<boolean> {
    try {
      const rol = await this.roleService.findById(roleId);

      if (role.includes(rol.name)) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
