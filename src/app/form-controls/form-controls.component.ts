import { Component } from '@angular/core';

import { FormControlsStore } from './form-controls.store';

@Component({
  selector: 'app-form-controls',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <button mat-raised-button color="primary" routerLink="template-driven" routerLinkActive="active">Template-driven</button>
      <button mat-raised-button color="primary" routerLink="reactive-forms" routerLinkActive="active">Reactive Forms</button>
    </div>
  `,
  styles: [``]
})
export class FormControlsComponent {
  constructor(public formControls: FormControlsStore) {}
}
