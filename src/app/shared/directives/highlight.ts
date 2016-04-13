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

  private _defaultColor = 'red';

  constructor(private el: ElementRef) { }

  onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
  onMouseLeave() { this._highlight(null); }

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
