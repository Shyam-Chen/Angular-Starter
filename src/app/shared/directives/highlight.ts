import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {

  @Input('highlight') highlightColor: string;

  private defaultColor = 'red';

  constructor(private el: ElementRef) { }

  onMouseEnter() { this.highlight(this.highlightColor || this.defaultColor); }
  onMouseLeave() { this.highlight(null); }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
