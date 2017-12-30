import { Component } from '@angular/core';

import { FormControlsStore } from './form-controls.store';

@Component({
  selector: 'form-controls',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <div class="ans-nav">
        <div class="ans-nav__links">
          <mat-card class="ans-nav__link" routerLink="template-driven">Template-driven</mat-card>
          <mat-card class="ans-nav__link" routerLink="reactive-forms">Reactive Forms</mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class FormControlsComponent {
  constructor(public $fc: FormControlsStore) {}
}
