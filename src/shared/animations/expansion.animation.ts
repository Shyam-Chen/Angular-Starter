import { animation, state, transition, style, animate } from '@angular/animations';

/**
 * @example
 * useAnimation(expansionAnimation, {
 *   params: { timings: '225ms' },
 * }),
 */
export const expansionAnimation = animation([
  state('collapsed', style({ height: '0', 'min-height': '0', display: 'none' })),
  state('expanded', style({ height: '*' })),
  transition('expanded <=> collapsed', animate('{{ timings }} cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);
