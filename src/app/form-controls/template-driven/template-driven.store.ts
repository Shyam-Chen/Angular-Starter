import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

import { AgeList, Frameworks } from './template-driven.model';

@Injectable()
export class TemplateDrivenStore {
  // input
  @observable nickname: string = '';

  // select
  @observable age: number = 0;

  @observable
  listOfage: AgeList[] = [
    { value: 12, label: 'Twelve' },
    { value: 13, label: 'Thirteen' },
    { value: 14, label: 'Fourteen' },
    { value: 15, label: 'Fifteen' },
    { value: 16, label: 'Sixteen' },
    { value: 17, label: 'Seventeen' },
    { value: 18, label: 'Eighteen' },
    { value: 19, label: 'Nineteen' },
    { value: 20, label: 'Twenty' },
    { value: 21, label: 'Twenty one' },
    { value: 22, label: 'Twenty two' },
    { value: 23, label: 'Twenty three' },
    { value: 24, label: 'Twenty four' },
    { value: 25, label: 'Twenty five' }
  ];

  @action
  ageChange(value: number): void {
    this.age = value;
  }

  // checkboxes
  @observable
  frameworks: Frameworks = {
    angular: false,
    react: false,
    vue: false
  };

  // radio buttons
  @observable gender: string = '';

  @action
  genderChange(value: string): void {
    this.gender = value;
  }

  // switch
  @observable autoplay: boolean = false;

  // slider
  @observable kilometers: number = 0;

  @action
  kilometersChange(value: number): void {
    this.kilometers = value;
  }

  // datepicker
  @observable birthday: Date;

  @action
  birthdayChange(value: Date): void {
    this.birthday = value;
  }
}
