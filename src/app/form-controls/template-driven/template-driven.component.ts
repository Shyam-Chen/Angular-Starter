import { Component } from '@angular/core';

import { FormControlsStore } from '../form-controls.store';

@Component({
  selector: 'app-form-controls-template-driven',
  template: `
    <div class="container" *mobxAutorun>
      <div class="container mat-elevation-z2">
        <h3>Template-driven Forms</h3>

        <form class="example-form">
          <div class="row">
            <mat-form-field>
              <input matInput placeholder="Nickname" [(ngModel)]="formControls.nickname" name="nickname">
            </mat-form-field>
            <div class="outputs">{{ formControls.nickname }}</div>
          </div>

          <div class="row">
            <mat-slide-toggle [checked]="formControls.autoplay" (change)="formControls.autoplay = !formControls.autoplay">Autoplay</mat-slide-toggle>
            <div class="outputs">{{ formControls.displayAutoplay }}</div>
          </div>

          <div class="row">
            <mat-slider
              class="slider"
              min="0" max="300" step="5"
              #kilometers
              [value]="formControls.kilometers"
              (change)="kilometersChange(kilometers.value)"
            ></mat-slider>
            <div class="outputs">{{ formControls.kilometers }}</div>
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
  `]
})
export class TemplateDrivenComponent {
  constructor(private formControls: FormControlsStore) {}

  public kilometersChange(value: number): void {
    this.formControls.kilometers = value;
  }
}
