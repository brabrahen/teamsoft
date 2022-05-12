import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-address.dto';
import { IsString, IsNotEmpty, Length, IsInt, IsOptional } from 'class-validator';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
    @IsString()
    @IsOptional()
    @Length(6)
    logradouro: string;

    @IsInt()
    @IsOptional()
    numero: number;

    @IsString()
    @IsOptional()
    complemento: string;

    @IsString()
    @IsOptional()
    bairro: string;

    @IsString()
    @IsOptional()
    @Length(3)
    cidade: string;

    @IsString()
    @IsOptional()
    @Length(4)
    estado: string;

    @IsString()
    @IsOptional()
    @Length(8,8)
    cep: string;

    @IsString()
    userId: string;

}
