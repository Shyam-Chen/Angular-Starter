import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';
import { ApiStore } from './api.store';

@Module({
  modules: [],
  controllers: [ApiController],
  components: [ApiStore],
  exports: []
})
export class ApiModule {}
