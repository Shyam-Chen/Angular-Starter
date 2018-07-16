import { Module } from '@nestjs/common';

import { HelloWorldModule } from './hello-world/hello-world.module';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [HelloWorldModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
