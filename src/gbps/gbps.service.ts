import { Injectable } from '@nestjs/common';
import { CreateGbpDto } from './dto/create-gbp.dto';
import { UpdateGbpDto } from './dto/update-gbp.dto';

@Injectable()
export class GbpsService {
  create(createGbpDto: CreateGbpDto) {
    return 'This action adds a new gbp';
  }

  findAll() {
    return `This action returns all gbps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gbp`;
  }

  update(id: number, updateGbpDto: UpdateGbpDto) {
    return `This action updates a #${id} gbp`;
  }

  remove(id: number) {
    return `This action removes a #${id} gbp`;
  }
}
