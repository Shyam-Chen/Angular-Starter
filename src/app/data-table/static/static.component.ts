import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { StaticStore } from './static.store';
import { People } from './static.model';

@Component({
  selector: 'data-table--static',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <div class="mat-elevation-z8">
        <mat-table #table [dataSource]="dataSource">

          <!-- Position Column -->
          <ng-container matColumnDef="position">
            <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{ element.position }} </mat-cell>
          </ng-container>

          <!-- Name Column -->
          <ng-container matColumnDef="name">
            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{ element.name }} </mat-cell>
          </ng-container>

          <!-- Weight Column -->
          <ng-container matColumnDef="weight">
            <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{ element.weight }} </mat-cell>
          </ng-container>

          <!-- Symbol Column -->
          <ng-container matColumnDef="symbol">
            <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{ element.symbol }} </mat-cell>
          </ng-container>

          <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
          <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
        </mat-table>

        <mat-paginator #paginator [pageSize]="10" [pageSizeOptions]="[5, 10, 20]"></mat-paginator>
      </div>
    </div>
  `,
  styles: [``]
})
export class StaticComponent {
  constructor(public $s: StaticStore) {}

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<People>(this.$s.people);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
