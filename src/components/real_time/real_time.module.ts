import { Module } from '@nestjs/common';
import { RealTimeController } from './real_time.controller';
import { RealTimeService } from './real_time.service';

@Module({
    controllers: [RealTimeController],
    providers: [RealTimeService]
})
export class RealTimeModule {}
