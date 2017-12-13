import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';
import { ApiStore } from './api.store';

@Module({
  controllers: [ApiController],
  components: [ApiStore]
})
export class ApiModule {}
