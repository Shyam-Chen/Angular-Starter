import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">
      CRUD
    </div>
  `,
  styles: [``]
})
export class CRUDComponent {}
