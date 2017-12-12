import { Component } from '@angular/core';

@Component({
  selector: 'app-form-controls-reactive-forms',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">
      <div class="container mat-elevation-z2" style="margin-top: 1rem">
        <h3>Reactive Forms</h3>

        <form class="example-form">
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
  `]
})
export class ReactiveFormsComponent {}
