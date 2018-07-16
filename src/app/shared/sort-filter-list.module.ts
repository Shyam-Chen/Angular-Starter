import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ConvertSecondsPipe } from './pipes/convert-seconds.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TimeSincePipe } from './pipes/time-since.pipe';

import { SortFilterListComponent } from './sort-filter-list.component';
import { SortListPipe } from './sort-list.pipe';
import { FilterListPipe } from './filter-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [
    ConvertSecondsPipe,
    TruncatePipe,
    TimeSincePipe,
    SortFilterListComponent,
    SortListPipe,
    FilterListPipe,
  ],
  providers: [],
  exports: [
    SortFilterListComponent,
  ],
})
export class SortFilterListModule { }
