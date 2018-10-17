import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public opened: boolean = !(window.innerWidth < 600);
  public mode: string = window.innerWidth < 600 ? 'over' : 'side';
  public logo = this.sanitizer.bypassSecurityTrustResourceUrl(require('../assets/images/logo.svg'));

  constructor(private sanitizer: DomSanitizer) { }
}
