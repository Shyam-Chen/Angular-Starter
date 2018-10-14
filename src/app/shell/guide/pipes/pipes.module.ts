import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ConvertSecondsPipe } from '../../../shared/pipes/convert-seconds.pipe';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { TimeSincePipe } from '../../../shared/pipes/time-since.pipe';

import { PipesComponent } from './pipes.component';
import { SortFilterListComponent } from './sort-filter-list.component';
import { SortListPipe } from './sort-list.pipe';
import { FilterListPipe } from './filter-list.pipe';

const ROUTES: Routes = [
  { path: '', component: PipesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ConvertSecondsPipe,
    TruncatePipe,
    TimeSincePipe,

    PipesComponent,
    SortFilterListComponent,
    SortListPipe,
    FilterListPipe,
  ],
  providers: [],
})
export class PipesModule {}
