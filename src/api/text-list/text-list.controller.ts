import {
  Controller,
  Get, Post,
  Request, Response, Next,
  Param, Body, Query,
  HttpStatus
} from '@nestjs/common';

import { TextListStore } from './text-list.store';

@Controller()
export class TextListController {
  constructor(private textList: TextListStore) {}

  @Get()
  findAll(): string[] {
    return this.textList.findAll();
  }
}
