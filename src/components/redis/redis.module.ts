import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-ioredis-yet';
import { CacheModule } from '@nestjs/cache-manager';



@Module({
    imports: [
        //load env from config
        ConfigModule.forRoot({ isGlobal: true }),

        //connect to redis
        CacheModule.registerAsync({
            isGlobal: true,
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                store: await redisStore({
                    host: config.get<string>('REDIS_HOST'),
                    port: config.get<number>('REDIS_PORT'),
                    ttl: 600, // 10 minutes
                })
            })
        })
    ]
})
export class RedisModule { }
