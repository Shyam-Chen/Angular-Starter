import { Component } from '@angular/core';

import { FormControlsStore } from './form-controls.store';

@Component({
  selector: 'app-form-controls',
  template: `
    <div *mobxAutorun>
      TODO
    </div>
  `,
  styles: [``]
})
export class FormControlsComponent {
  constructor(private formControls: FormControlsStore) {}
}
