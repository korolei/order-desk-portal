import {Component, Input} from '@angular/core';
import {SalesOrder} from "../../shared/models/sales-order";
import {MatTableDataSource} from "@angular/material";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html'
})
export class AllOrdersComponent {
  @Input() ordersData: SalesOrder[]=[];
  dataSource: MatTableDataSource<SalesOrder>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<SalesOrder>(this.ordersData);
  }

  toggleView(viewIndex: number){
    this.customerService.viewIndx.next(viewIndex)
  }

}
