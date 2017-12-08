import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

@Injectable()
export class FormControlsStore {
  // input
  @observable nickname: string = '';

  // switch
  @observable autoplay: boolean = false;

  @computed
  get displayAutoplay(): string {
    return this.autoplay ? `${this.autoplay}`.charAt(0).toUpperCase() + `${this.autoplay}`.slice(1) : '';
  }
}
