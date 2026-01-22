import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    //load env from config
    ConfigModule.forRoot({ isGlobal: true }),

    //connect to postgres
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], 
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true, //find db tables auto
        synchronize: true, //set to false in prod
      })
    })
  ],
  controllers: []
})
export class DatabaseModule {}
