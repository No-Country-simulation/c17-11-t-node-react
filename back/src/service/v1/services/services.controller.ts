import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Controller } from '@nestjs/common';

@Controller({
    version: "1",
    path: PRINCIPAL_PATHS.SERVICE
})

// hace consulta con los metodos del service

export class ServicesController {
    constructor(
        private authService:  
    )
}
