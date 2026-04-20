import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class TestService {
  constructor(private redis: RedisService) {}

  async testRedis() {
    await this.redis.set('test', 'hello railway');
    return this.redis.get('test');
  }
}