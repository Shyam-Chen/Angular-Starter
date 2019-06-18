import { animation, style, animate } from '@angular/animations';

/**
 * @example
 * useAnimation(slideInAnimation, {
 *   params: { from: '20%', timings: '200ms ease-in' },
 * }),
 */
export const slideInAnimation = animation([
  style({ transform: 'translateY({{ from }})', opacity: 0 }),
  animate('{{ timings }}', style({ transform: 'translateY(0)', opacity: 1 })),
]);

/**
 * @example
 * useAnimation(slideOutAnimation, {
 *   params: { to: '-200%', timings: '200ms ease-in' },
 * }),
 */
export const slideOutAnimation = animation([
  animate('{{ timings }}', style({ transform: 'translateY({{ to }})', opacity: 0 })),
]);
