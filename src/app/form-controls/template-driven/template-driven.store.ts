import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

@Injectable()
export class TemplateDrivenStore {
  // input
  @observable nickname: string = '';

  // switch
  @observable autoplay: boolean = false;

  @computed
  get displayAutoplay(): string {
    return this.autoplay ? `${this.autoplay}`.charAt(0).toUpperCase() + `${this.autoplay}`.slice(1) : '';
  }

  // slider
  @observable kilometers: number = 100;
}
