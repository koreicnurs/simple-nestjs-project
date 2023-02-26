import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRep: typeof Role) {}
  async createRole(dto: CreateRoleDto) {
    return await this.roleRep.create(dto);
  }

  async getRoleByValue(value: string) {
    return await this.roleRep.findOne({ where: { value } });
  }
}
