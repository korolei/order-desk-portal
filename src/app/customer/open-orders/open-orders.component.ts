import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SalesOrder} from "../../shared/models/sales-order";

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html'
})
export class OpenOrdersComponent implements OnInit {
@Input() openOrdersData: SalesOrder[]=[];
  displayedColumns: string[] =       [
    'quoteNumber', 'soldToBPName', 'soldToBP',
    'totalUSD', 'plannedDeliveryDate', 'quotationStatus'
  ];
  internalHold = 'Internal Hold';
  dataSource: MatTableDataSource<SalesOrder>;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<SalesOrder>(this.openOrdersData);
    //this.paginator.pageSize = 6;
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
