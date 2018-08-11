import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      <div>Whoops, 404!</div>
      <div>The page you were looking for does not exist.</div>
      <button routerLink="">Get me out of here!</button>
    </div>
  `,
})
export class NotFoundComponent {}
