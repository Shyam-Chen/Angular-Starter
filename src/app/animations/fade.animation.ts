import { trigger, state, style, transition, animate } from '@angular/animations';

export const FadeAnimation = trigger('fade', [
  state('shown', style({ opacity: 1 })),
  state('hidden', style({ opacity: 0 })),
  transition('* => *', animate('.5s'))
]);
