import { Module } from '@nestjs/common';
import { GbpsService } from './gbps.service';
import { GbpsController } from './gbps.controller';

@Module({
  controllers: [GbpsController],
  providers: [GbpsService],
})
export class GbpsModule {}
