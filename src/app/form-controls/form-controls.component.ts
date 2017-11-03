import { Component } from '@angular/core';

import { FormControlsStore } from './form-controls.store';

@Component({
  selector: 'app-form-controls',
  template: `
    <div class="container" *mobxAutorun>

      <div class="container mat-elevation-z2">
        <h3>Template-driven Forms</h3>

        <form class="example-form">
          <div class="row">
            <mat-form-field>
              <input matInput placeholder="Nickname" [(ngModel)]="formControls.nickname" name="nickname">
            </mat-form-field>
            <div class="outputs">
              {{ formControls.nickname }}
            </div>
          </div>
        </form>
      </div>

      <div class="container mat-elevation-z2" style="margin-top: 1rem">
        <h3>Reactive Forms</h3>
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
  `]
})
export class FormControlsComponent {
  constructor(private formControls: FormControlsStore) {}
}
