import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ISalesOrder, SalesOrder} from "../../shared/models/sales-order";
import {AppSettings} from "../../core/app-settings";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AppService} from "../../app.service";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  @Input() contactId;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ordersData: SalesOrder[]=[];
  dataSource: MatTableDataSource<SalesOrder>;
  displayedColumns: string[] = [
    'quoteNumber', 'soldToBPName', 'soldToBP',
    'totalUSD', 'plannedDeliveryDate', 'plannedReceiptDate','postalAddress', 'quotationStatus'
  ];
  internalHold = 'Internal Hold';
  creditHold = 'Credit Hold';

  constructor(public appService: AppService, public customerService: CustomerService) { }

  ngOnInit() {
    this.appService.getData<ISalesOrder[]>(AppSettings.allSalesOrderApi)
      .subscribe(data =>
      {
        this.ordersData = (data as ISalesOrder[]).map(item => new SalesOrder(item as ISalesOrder));
        this.dataSource = new MatTableDataSource<SalesOrder>(this.ordersData);
        this.paginator.pageSize=10;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  toggleView(viewIndex: number) {
    this.customerService.viewIndx.next(viewIndex);
  }
}
