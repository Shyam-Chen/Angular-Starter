import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SortFilterListComponent } from './sort-filter-list.component';
import { ConvertSecondsPipe } from './convert-seconds.pipe';
import { TruncatePipe } from './truncate.pipe';
import { TimeSincePipe } from './time-since.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    SortFilterListComponent,
    ConvertSecondsPipe,
    TruncatePipe,
    TimeSincePipe,
  ],
  providers: [],
  exports: [
    SortFilterListComponent,
  ],
})
export class SortFilterListModule { }
