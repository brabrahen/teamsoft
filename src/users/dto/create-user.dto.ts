import { IsInt, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @Length(14,14)
    cnpj: string;

    @IsNotEmpty()
    @Length(4)
    razaoSocial: string;

    @IsNotEmpty()
    @Length(4)
    nomeContato: string;

    @IsNotEmpty()
    @IsInt()
    @Length(8)
    telefone: number;
}
