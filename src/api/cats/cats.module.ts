import { Module } from '@nestjs/common';

import { CatsController } from './cats.controller';
import { CatsComponent } from './cats.component';

@Module({
  controllers: [CatsController],
  components: [CatsComponent]
})
export class CatsModule {}
