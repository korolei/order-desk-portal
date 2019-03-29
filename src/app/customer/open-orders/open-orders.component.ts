import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SalesOrder} from "../../shared/models/sales-order";
import {CustomerService} from "../customer.service";
import {AppSettings} from "../../core/app-settings";

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html'
})

export class OpenOrdersComponent implements OnInit {
  @Input() ordersData: SalesOrder[]=[];
  dataSource: MatTableDataSource<SalesOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService,private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<SalesOrder>(this.ordersData);
    this.paginator.pageSize = AppSettings.pageSizeSm;
    this.dataSource.paginator = this.paginator;
  }

  toggleView(viewIndex: number){
    this.customerService.viewIndx.next(viewIndex)
  }
}
