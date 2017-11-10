import { Controller, Get, Post, Body, UseGuards, ReflectMetadata, UseInterceptors, Param } from '@nestjs/common';

import { CatsComponent } from './cats.component';
import { Cat } from './cats.model';

@Controller('cats')
export class CatsController {
  constructor(private readonly cats: CatsComponent) {}

  @Post()
  async create(@Body() data: any) {
    this.cats.create(data);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.cats.findAll();
  }
}
