import { Component } from '@nestjs/common';

@Component()
export class ApiStore {
  public findAll(): string[] {
    return ['foo', 'bar', 'baz'];
  }
}
