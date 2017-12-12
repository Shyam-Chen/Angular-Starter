import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TemplateDrivenStore } from './template-driven.store';

@Component({
  selector: 'app-form-controls-template-driven',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">
      <div class="container mat-elevation-z2">
        <h3>Template-driven Forms</h3>

        <form class="example-form">
          <div class="row">
            <mat-form-field>
              <input matInput placeholder="Nickname" [(ngModel)]="templateDriven.nickname" name="nickname">
            </mat-form-field>
            <div class="outputs">{{ templateDriven.nickname }}</div>
          </div>

          <div class="row">
            <mat-form-field>
              <mat-select
                placeholder="Age"
                #age
                [value]="templateDriven.age"
                (change)="templateDriven.ageChange(age.value)"
              >
                <mat-option *ngFor="let item of templateDriven.listOfage" [value]="item.value">
                  {{ item.label }}
                </mat-option>
              </mat-select>
            </mat-form-field>
            <div class="outputs">{{ templateDriven.age }}</div>
          </div>

          <div class="row">
            <mat-checkbox [checked]="templateDriven.frameworks.angular" (change)="templateDriven.frameworks.angular = !templateDriven.frameworks.angular">Angular</mat-checkbox>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <mat-checkbox [checked]="templateDriven.frameworks.react" (change)="templateDriven.frameworks.react = !templateDriven.frameworks.react">React</mat-checkbox>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <mat-checkbox [checked]="templateDriven.frameworks.vue" (change)="templateDriven.frameworks.vue = !templateDriven.frameworks.vue">Vue</mat-checkbox>

            <div class="outputs">
              {{ templateDriven.frameworks.angular ? 'Angular' : '' }}
              {{ templateDriven.frameworks.react ? 'React' : '' }}
              {{ templateDriven.frameworks.vue ? 'Vue' : '' }}
            </div>
          </div>

          <div class="row">
            <mat-radio-group>
              <mat-radio-button value="male" #male (change)="genderChange(male.value)">Male</mat-radio-button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <mat-radio-button value="female" #female (change)="genderChange(female.value)">Female</mat-radio-button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <mat-radio-button value="other" #other (change)="genderChange(other.value)">Other</mat-radio-button>
            </mat-radio-group>
            <div class="outputs">
              {{ templateDriven.gender.charAt(0).toUpperCase() + templateDriven.gender.slice(1) }}
            </div>
          </div>

          <div class="row">
            <mat-slide-toggle labelPosition="before" [checked]="templateDriven.autoplay" (change)="templateDriven.autoplay = !templateDriven.autoplay">Autoplay</mat-slide-toggle>
            <div class="outputs">{{ templateDriven.displayAutoplay }}</div>
          </div>

          <div class="row">
            <mat-slider
              class="slider"
              min="0" max="300" step="5"
              #kilometers
              [value]="templateDriven.kilometers"
              (change)="kilometersChange(kilometers.value)"
            ></mat-slider>
            <div class="outputs">{{ templateDriven.kilometers }}</div>
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
  constructor(private templateDriven: TemplateDrivenStore) {}

  public genderChange(value: string): void {
    this.templateDriven.gender = value;
  }

  public kilometersChange(value: number): void {
    this.templateDriven.kilometers = value;
  }
}
