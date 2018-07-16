import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type List = {
  [value: string]: any,
};

@Component({
  selector: 'sort-filter-list',
  template: `
    <div>
      <div class="o-button-groups">
        <div class="o-button-group">
          <div>Sort</div>
          <button mat-raised-button [color]="sort === 'published' && 'primary'" (click)="sort = 'published'">Published</button>
          <button mat-raised-button [color]="sort === 'views' && 'primary'" (click)="sort = 'views'">Views</button>
          <button mat-raised-button [color]="sort === 'collections' && 'primary'" (click)="sort = 'collections'">Collections</button>
        </div>

        <div class="o-button-group">
          <div>Length</div>
          <button mat-raised-button [color]="length === 'any' && 'primary'" (click)="length = 'any'">Any</button>
          <button mat-raised-button [color]="length === 'lessThanFive' && 'primary'" (click)="length = 'lessThanFive'">Less than five minutes</button>
          <button mat-raised-button [color]="length === 'fiveToTen' && 'primary'" (click)="length = 'fiveToTen'">Five to ten minutes</button>
          <button mat-raised-button [color]="length === 'moreThanTen' && 'primary'" (click)="length = 'moreThanTen'">More than ten minutes</button>
        </div>
      </div>

      <div *ngIf="!isLoading; else loading">
        <div *ngIf="(list | sortList: sort | filterList: length).length !== 0; else noResults" class="o-cards">
          <div *ngFor="let item of (list | sortList: sort | filterList: length)">
            <mat-card class="o-card">
              <div class="o-card-media">
                <img mat-card-image [src]="item.thumbnail" class="o-card-image">
                <div class="o-card-time">{{ item.duration | convertSeconds }}</div>
              </div>

              <mat-card-content class="o-card-content">
                <div>{{ item.title | truncate: 50 }}</div>
                <div><mat-icon>headset</mat-icon> {{ item.views.toLocaleString('en-US') }}</div>
                <div><mat-icon>event</mat-icon> {{ item.publish * 1000 | timeSince }}</div>
                <div><mat-icon>video_library</mat-icon> {{ item.collectCount.toLocaleString('en-US') }}</div>
              </mat-card-content>
            </mat-card>
          </div>
        </div>

        <ng-template #noResults>
          <div>No results</div>
        </ng-template>
      </div>

      <ng-template #loading>
        <div>Loading...</div>
      </ng-template>
    </div>
  `,
  styles: [`
    .o-cards {
      display: flex;
      flex-flow: row wrap;
      max-width: 1280px;
    }

    .o-card {
      width: 17.5rem;
      margin: 0.75rem;
      box-sizing: border-box;
    }

    .o-card-media {
      position: relative;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
    }

    .o-card-media:hover {
      transform: scale(1.1);
    }

    .o-card-image {
      height: 150px;
    }

    .o-card-time {
      position: absolute;
      right: -0.5rem;
      bottom: 1.75rem;
      color: white;
      background: black;
      padding: 0.25rem;
    }

    .o-card-content {
      margin: 0;
    }
  `],
})
export class SortFilterListComponent implements OnInit {
  public sort: string = 'published';
  public length: string = 'any';
  public list: Array<any> = [];
  public isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<List[]>('https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo')
      .subscribe((res: any) => {
        this.list = res.data;
      });
  }
}
