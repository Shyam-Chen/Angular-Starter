import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TemplateDrivenStore } from './template-driven.store';

@Component({
  selector: 'form-controls--template-driven',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">
      <div class="container mat-elevation-z2">
        <h3>Template-driven Forms</h3>

        <form class="example-form">
          <div class="row">
            <mat-form-field>
              <input matInput placeholder="Nickname" [(ngModel)]="$td.nickname" name="nickname">
            </mat-form-field>
            <div class="outputs">{{ $td.nickname }}</div>
          </div>

          <div class="row">
            <mat-form-field>
              <mat-select
                placeholder="Age"
                #age
                [value]="$td.age"
                (change)="$td.ageChange(age.value)"
              >
                <mat-option *ngFor="let item of $td.listOfage" [value]="item.value">
                  {{ item.label }}
                </mat-option>
              </mat-select>
            </mat-form-field>
            <div class="outputs">{{ $td.age !== 0 ? $td.age : '' }}</div>
          </div>

          <div class="row">
            <div style="flex-direction: column">
              <p>Frameworks</p>
              <div>
                <mat-checkbox [checked]="$td.frameworks.angular" (change)="$td.frameworks.angular = !$td.frameworks.angular">Angular</mat-checkbox>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <mat-checkbox [checked]="$td.frameworks.react" (change)="$td.frameworks.react = !$td.frameworks.react">React</mat-checkbox>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <mat-checkbox [checked]="$td.frameworks.vue" (change)="$td.frameworks.vue = !$td.frameworks.vue">Vue</mat-checkbox>
              </div>
            </div>
            <div class="outputs">
              {{ $td.frameworks.angular ? 'Angular' : '' }}
              {{ $td.frameworks.react ? 'React' : '' }}
              {{ $td.frameworks.vue ? 'Vue' : '' }}
            </div>
          </div>

          <div class="row">
            <div style="flex-direction: column">
              <p>Gender</p>
              <div>
                <mat-radio-group>
                  <mat-radio-button value="male" #male (change)="$td.genderChange(male.value)">Male</mat-radio-button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <mat-radio-button value="female" #female (change)="$td.genderChange(female.value)">Female</mat-radio-button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <mat-radio-button value="other" #other (change)="$td.genderChange(other.value)">Other</mat-radio-button>
                </mat-radio-group>
              </div>
            </div>
            <div class="outputs" style="text-transform: capitalize">
              {{ $td.gender }}
            </div>
          </div>

          <div class="row">
            <mat-slide-toggle labelPosition="before" [checked]="$td.autoplay" (change)="$td.autoplay = !$td.autoplay">Autoplay</mat-slide-toggle>
            <div class="outputs" style="text-transform: capitalize">
              {{ $td.autoplay ? $td.autoplay : '' }}
            </div>
          </div>

          <div class="row">
            <div style="flex-direction: column">
              <p>Kilometers</p>
              <mat-slider
                class="slider"
                min="0" max="300" step="5"
                #kilometers
                [value]="$td.kilometers"
                (change)="$td.kilometersChange(kilometers.value)"
              ></mat-slider>
            </div>
            <div class="outputs">{{ $td.kilometers !== 0 ? $td.kilometers : '' }}</div>
          </div>

          <div class="row">
            <div style="flex-direction: column">
              <p>Birthday</p>
              <mat-form-field>
                <input matInput #birthday [matDatepicker]="picker" placeholder="Choose a date" (dateChange)="$td.birthdayChange(birthday.value)">
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
              </mat-form-field>
            </div>
            <div class="outputs">{{ $td.birthday }}</div>
          </div>

          <div class="row">
            ...
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 1rem;
    }

    .row {
      padding: .66rem;
      display: flex;
      flex-direction: row;
    }

    .outputs {
      align-self: center;
      margin: 0 0 .5rem .5rem;
      color: #3F51B5;
    }

    .slider {
      width: 300px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenComponent {
  constructor(public $td: TemplateDrivenStore) {}
}
