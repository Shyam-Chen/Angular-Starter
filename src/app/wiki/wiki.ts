import { Component } from 'angular2/core';
import { JSONP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './services/wikipedia';

@Component({
  selector: 'wiki',
  templateUrl: './app/wiki/wiki.html',
  styleUrls: ['./app/wiki/wiki.css'],
  viewProviders: [
    JSONP_PROVIDERS,
    WikipediaService
  ]
})
export class WikiComponent {

  constructor(private _wikipediaService: WikipediaService) { }

  list: Observable<string[]>;

  search(term: string) {
    this.list = this._wikipediaService.search(term);
  }

}
