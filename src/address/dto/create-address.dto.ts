import { IsString, IsNotEmpty, Length, IsInt } from 'class-validator';

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    @Length(6)
    logradouro: string;

    @IsInt()
    @IsNotEmpty()
    numero: number;

    @IsString()
    @IsNotEmpty()
    complemento: string;

    @IsString()
    @IsNotEmpty()
    bairro: string;

    @IsString()
    @IsNotEmpty()
    @Length(3)
    cidade: string;

    @IsString()
    @IsNotEmpty()
    @Length(4)
    estado: string;

    @IsString()
    @IsNotEmpty()
    @Length(8,8)
    cep: string;

    @IsString()
    userId: string;
}
