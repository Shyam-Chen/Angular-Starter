import { Get, Controller } from '@nestjs/common';

import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly api$: ApiService) {}

  @Get()
  root(): string {
    return this.api$.root();
  }
}
