import { Controller, Get } from '@nestjs/common';

import { ApiStore } from './api.store';

@Controller()
export class ApiController {
  constructor(private apiStore: ApiStore) {}

	@Get()
	findAll(): string[] {
    return this.apiStore.findAll();
  }
}
