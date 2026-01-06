import { Module } from '@nestjs/common';
import joi from 'joi';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { AuthConfig } from './auth.config';

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [AuthConfig],
            validationSchema: joi.object({
                NODE_ENV: joi.string().valid('development', 'production').required(),
                PORT: joi.number().default(3000),

                JWT_ACCESS_SECRET: joi.string().required(),
                JWT_REFRESH_SECRET: joi.string().required(),
            })
        })
    ]
})
export class ConfigModule { }
