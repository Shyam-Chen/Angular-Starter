import { Component } from '@nestjs/common';

@Component()
export class TextListStore {
  public findAll(): string[] {
    return ['foo', 'bar', 'baz'];
  }
}
