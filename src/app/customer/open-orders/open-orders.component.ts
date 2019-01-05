import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SalesOrder} from "../../shared/models/sales-order";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html'
})

export class OpenOrdersComponent implements OnInit {
  @Input() ordersData: SalesOrder[]=[];
  displayedColumns: string[] = [
    'quoteNumber', 'soldToBPName', 'soldToBP',
    'totalUSD', 'plannedDeliveryDate', 'quotationStatus'
  ];

  internalHold = 'Internal Hold';
  creditHold = 'Credit Hold';

  dataSource: MatTableDataSource<SalesOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<SalesOrder>(this.ordersData);
    this.paginator.pageSize = 6;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggleView(viewIndex: number){
    this.customerService.viewIndx.next(viewIndex)
  }
}
