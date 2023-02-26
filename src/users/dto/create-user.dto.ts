import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'qwe@mail.ru', description: "user's email" })
  readonly email: string;
  @ApiProperty({ example: '1234', description: "user's password" })
  readonly password: string;
}
