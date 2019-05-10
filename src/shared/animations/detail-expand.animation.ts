import { trigger, state, transition, style, animate } from '@angular/animations';

export const detailExpand = trigger('detailExpand', [
  state('collapsed', style({ height: '0', 'min-height': '0', display: 'none' })),
  state('expanded', style({ height: '*' })),
  transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);
