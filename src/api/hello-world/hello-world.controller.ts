import { Controller, Get } from '@nestjs/common';

import { HelloWorldService } from './hello-world.service';

@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly h$: HelloWorldService) {}

  @Get()
  send(): string {
    return this.h$.message();
  }
}
