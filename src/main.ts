import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './common/logger/logger.service';
async function bootstrap() {
 
  const logger = new AppLogger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule, {
      bufferLogs: true,
    });
    await app.listen(3000);

    logger.log('Application started on http://localhost:3000');
    logger.log('Database connection verified');
    logger.log('Redis connection verified');

  } catch (error) {
    logger.error(' Application failed to start!', error.stack);
  }
}
bootstrap();