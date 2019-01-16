import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ISalesOrder, SalesOrder} from '../models/sales-order';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AppSettings} from "../../core/app-settings";
import {AppService} from "../../app.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: [
  `
  table {
    width: 100%;
  }
  `
  ,
  `
  .new-order {
      margin-left: 5em;
  }
  `
  ,
  `
  .subtitle{
    font-size: smaller;
    padding-left: 2em;
  }
  `
  ,
  `
  .warn {
      color: #ca4840;
  }
  `
  ,
  `
  .order-flag {
    color: #ca4840;
    font-size: smaller;
  }
  `,
  `.material-icons.md-18 { font-size: 14px; }`
  ,
  `h2.mat-typography { font-weight: bold; padding-left: 2em; }`
  ]
})
export class OrderListComponent implements OnInit {
  @Input() showHeader: boolean = false;
  @Input() fullView: boolean = false;
  //@Input() openOrdersData: SalesOrder[]=[];
  displayedColumns: string[] =       [
    'order', 'soldToBPName', 'soldToBP',
    'total', 'plannedDeliveryDate', 'promisedDate',
    'postalCode', 'owner', 'status'
  ];
  internalHold = 'Internal Hold';
  creditCard = 'Credit Card'
  public isLoading = new BehaviorSubject<boolean>(false);
  dataSource: MatTableDataSource<SalesOrder> = new MatTableDataSource<SalesOrder>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.isLoading.next(true);
    this.appService.getData<ISalesOrder[]>(AppSettings.openSalesOrderApi)
      .subscribe(data => {this.dataSource.data  = (data as ISalesOrder[])
        .map(item => new SalesOrder(item as ISalesOrder));
        this.isLoading.next(false);
      });

    this.paginator.pageSize = 10;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
