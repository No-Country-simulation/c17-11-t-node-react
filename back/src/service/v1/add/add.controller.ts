import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
import { Roles } from '@Decorators/role.decorator';
import { RoleService } from '@Role/role.service';
import { CreateServiceDTO } from '@Service/dto/service.dto';
import { ServiceService } from '@Service/service.service';
import { UserService } from '@User/user.service';
import { Body, Controller, Post, Req, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Request } from 'express';

@Controller({
    version: '1',
    path: PRINCIPAL_PATHS.SERVICE
})
export class AddController {
    constructor(
        private serviceService: ServiceService ,
        // private roleService: RoleService,
        // private userService: UserService
    ) {}
    
    @Public()
    //@Roles('admin')
    @Post()
    async addService(@Body() data: CreateServiceDTO, @Req() req:Request) {
        // let userId: string
        // const roleId = req.user['roleId']
        const { ...body} = data

        try {
            const service = await this.serviceService.create({
                ...body
            })
            return {
                success: true ,
                data: service
            }
            
        } catch (error) {
            if (error instanceof Error) {
                if (error.message == 'no_service') {
                  throw new BadRequestException({
                    success: false,
                    message: 'User not provided',
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