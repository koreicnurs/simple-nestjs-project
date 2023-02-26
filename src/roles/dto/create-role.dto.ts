import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'user', description: 'user' })
  readonly value: string;
  @ApiProperty({ example: 'user', description: 'user permission' })
  readonly description: string;
}
