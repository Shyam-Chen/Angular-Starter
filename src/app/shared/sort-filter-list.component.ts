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
          <button mat-raised-button [color]="'primary'">Published</button>
          <button mat-raised-button color="">Views</button>
          <button mat-raised-button color="">Collections</button>
        </div>

        <div class="o-button-group">
          <div>Length</div>
          <button mat-raised-button [color]="'primary'">Any</button>
          <button mat-raised-button color="">Less than five minutes</button>
          <button mat-raised-button color="">Five to ten minutes</button>
          <button mat-raised-button color="">More than ten minutes</button>
        </div>
      </div>

      <div *ngIf="!isLoading; else loading" class="o-cards">
        <div *ngFor="let item of list">
          <mat-card class="o-card">
            <div class="o-card-media">
              <img mat-card-image [src]="item.thumbnail" class="o-card-image">
              <div class="o-card-time">{{ item.duration }}</div>
            </div>

            <mat-card-content>
              <div>{{ item.title | truncate: 50 }}</div>
              <div>{{ item.views.toLocaleString('en-US') }}</div>
              <div>{{ item.publish * 1000 }}</div>
              <div>{{ item.collectCount.toLocaleString('en-US') }}</div>
            </mat-card-content>
          </mat-card>
        </div>
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
      max-width: 240px;
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
      right: 0.5rem;
      bottom: 0.5rem;
      color: white;
      background: black;
      padding: 0.25rem;
    }
  `],
})
export class SortFilterListComponent implements OnInit {
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
