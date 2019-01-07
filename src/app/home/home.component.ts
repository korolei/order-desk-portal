import {Component, OnInit} from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { QuotesService } from '../quotes/quotes.service';
import { SalesOrder } from '../shared/models/sales-order';
import { Quotation } from '../shared/models/quotation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
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
    .dashboard-card {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
    }`
  ]
})
export class HomeComponent implements OnInit {
  orderList: SalesOrder[];
  quoteList: Quotation[];
  orderHide: boolean[] = [
    false, false, false, false, false, true, true, true, false
  ];
  quoteHide: boolean[] = [
    false, false, false, false, false, true, true, true, false
  ];
  orderCount: number;
  quoteCount: number;

  constructor(private orderService: OrdersService, private quoteService: QuotesService) { }

  ngOnInit() {
    this.orderService.getOrders()
    .subscribe(orders => {
      this.orderList = orders.slice(0, 10);
      this.orderCount = orders.length;
    });
}

}
