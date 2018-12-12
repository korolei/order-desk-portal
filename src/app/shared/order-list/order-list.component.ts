import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from 'src/app/orders/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: []
})
export class OrderListComponent implements OnInit {

  @Input() showOrders: boolean;
  list: Order[];
  count: number;
  displayColumns: string[];
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //dataSource: MatTableDataSource<Order>;
  constructor(private orderService: OrdersService) { 
    
  }

  ngOnInit() {
      this.displayColumns = 
      [
        'id', 'customer.name', 'customer.id', 
        'total', 'deliverBy',
        'status'
      ];
      this.orderService.getOrders()
        .subscribe(orders => {
          this.list = orders;
          this.count = this.list.length;
        });
  }
}
