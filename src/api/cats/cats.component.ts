import { Component } from '@nestjs/common';

import { Cat } from './cats.model';

@Component()
export class CatsComponent {
  private readonly cats: Cat[] = [];

  public create(cat: Cat): void {
    this.cats.push(cat);
  }

  public findAll(): Cat[] {
    return this.cats;
  }
}
