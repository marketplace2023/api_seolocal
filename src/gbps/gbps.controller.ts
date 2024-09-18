import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GbpsService } from './gbps.service';
import { CreateGbpDto } from './dto/create-gbp.dto';
import { UpdateGbpDto } from './dto/update-gbp.dto';

@Controller('gbps')
export class GbpsController {
  constructor(private readonly gbpsService: GbpsService) {}

  @Post()
  create(@Body() createGbpDto: CreateGbpDto) {
    return this.gbpsService.create(createGbpDto);
  }

  @Get()
  findAll() {
    return this.gbpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gbpsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGbpDto: UpdateGbpDto) {
    return this.gbpsService.update(+id, updateGbpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gbpsService.remove(+id);
  }
}
