import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { SessionsModule } from './components/sessions/sessions.module';
import { RealTimeModule } from './components/real_time/real_time.module';
import { ChatModule } from './components/chat/chat.module';
import { GithubModule } from './components/github/github.module';
import { AiModule } from './components/ai/ai.module';

@Module({
  imports: [AuthModule, UsersModule, SessionsModule, GithubModule,RealTimeModule, ChatModule, AiModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
