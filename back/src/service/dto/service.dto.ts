import { IsNotEmpty, IsNumber, IsString,  } from "class-validator";


export class CreateServiceDTO {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsNumber()
    @IsNotEmpty()
    price:number
}

export class UpdateServiceDTO {
    // name?: string
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsNumber()
    @IsNotEmpty()
    price:number

}