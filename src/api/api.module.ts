import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiController } from './api.controller';
import { ApiStore } from './api.store';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://web-go-user:web-go-user@ds133961.mlab.com:33961/web-go-demo')
  ],
  controllers: [ApiController],
  components: [ApiStore],
  exports: []
})
export class ApiModule {}
