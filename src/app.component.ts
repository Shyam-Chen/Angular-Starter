import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // TODO: use state
  public navigation = [
    {
      subheader: 'Group 1',
      icon: 'loyalty',
      text: 'Link A',
      route: '',
      children: [
        { text: 'Link A-1', route: '' },
        {
          text: 'Link A-2',
          children: [
            { text: 'Link A-2-1', route: '' },
            { text: 'Link A-2-2', route: '' },
          ],
        },
      ],
    },
    {
      icon: 'business',
      text: 'Link B',
      route: '',
      children: [
        { text: 'Link B-1', route: '' },
        { text: 'Link B-2', route: '' },
      ],
    },
    { icon: 'face', text: 'Link C', route: '' },
    {
      subheader: 'Group 2',
      divider: true,
      icon: 'loyalty',
      text: 'Link D',
      route: '',
      children: [
        { text: 'Link D-1', route: '' },
        {
          text: 'Link D-2',
          children: [
            { text: 'Link D-2-1', route: '' },
            { text: 'Link D-2-2', route: '' },
          ],
        },
      ],
    },
    {
      icon: 'business',
      text: 'Link E',
      route: '',
      children: [
        { text: 'Link E-1', route: '' },
        { text: 'Link E-2', route: '' },
      ],
    },
    { icon: 'face', text: 'Link F', route: '' },
  ];

  public opened: boolean = !(window.innerWidth < 600);
  public mode: string = window.innerWidth < 600 ? 'over' : 'side';
  public logo = this.sanitizer.bypassSecurityTrustResourceUrl(require('./assets/images/logo.svg'));

  constructor(
    private sanitizer: DomSanitizer,
  ) {}
}
