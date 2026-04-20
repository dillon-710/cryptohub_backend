import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { TestModule } from './test/test.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [RedisModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
