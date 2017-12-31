import { Module } from '@nestjs/common';

import { TextListController } from './text-list.controller';
import { TextListStore } from './text-list.store';

@Module({
  imports: [],
  controllers: [TextListController],
  components: [TextListStore],
  exports: [TextListStore]
})
export class TextListModule {}
