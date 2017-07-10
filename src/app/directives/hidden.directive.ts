import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(element.nativeElement, 'display', 'none');
  }
}
