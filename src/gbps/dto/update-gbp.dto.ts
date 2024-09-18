import { PartialType } from '@nestjs/mapped-types';
import { CreateGbpDto } from './create-gbp.dto';

export class UpdateGbpDto extends PartialType(CreateGbpDto) {}
