import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class ReadinessService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly redisService: RedisService,
  ) {}

  async check() {
    const dbUp = this.dataSource.isInitialized;

    const redisUp = await this.redisService.ping();

    const ready = dbUp && redisUp;

    return {
      status: ready ? 'ready' : 'not_ready',
      checks: {
        database: dbUp ? 'up' : 'down',
        redis: redisUp ? 'up' : 'down',
      },
    };
  }
}
