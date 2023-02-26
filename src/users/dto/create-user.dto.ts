import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'doesnt match email' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'password' })
  @IsString({ message: 'Must be string' })
  @Length(5, 16, { message: 'not less 5 not more 16' })
  readonly password: string;
}
