import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SalesOrder} from '../models/sales-order';
import {OrdersService} from 'src/app/orders/orders.service';
import { MatPaginator, MatSort } from '@angular/material';
import { OrderDataSource } from './orders-datasource';

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
  `.gray { 
    background-color: #f8f8f8; 
  }`
  ,
  `  
  .warn {
      color: red;
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
]
})
export class OrderListComponent implements OnInit {
  @Input()
  hide: boolean[];

  @Input()
  paginate: boolean = false;

  @Input()
  pageSize: number = 15;

  pageOptions: number[] = [this.pageSize, this.pageSize*2, this.pageSize*4];
  //count: number;
  displayColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: OrderDataSource;
  
  constructor(private orderService: OrdersService) {

  }

  ngOnInit() {
      this.displayColumns =
      [
        'id', 'customer.name', 'customer.id',
        'total', 'deliverBy', 'createdOn', 'postalCode',
        'owner', 'status'
      ];
      this.dataSource = new OrderDataSource(this.paginator, this.sort, this.orderService);
      this.dataSource.disconnect();
      this.dataSource.connect();
      //this.dataSource.data = this.list;
  }
}
