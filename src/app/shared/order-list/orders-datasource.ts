import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { SalesOrder } from '../models/sales-order';
import { OrdersService } from 'src/app/orders/orders.service';

export class OrderDataSource extends DataSource<SalesOrder> {
    data: SalesOrder[];
  
    constructor(private paginator: MatPaginator, 
      private sort: MatSort,
      private orderService:OrdersService) {
      super();
    }
  
    connect(): Observable<SalesOrder[]> {
      const dataMutations = [
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ];
  
      this.orderService.getOrders()
      .subscribe(orders => {
        this.data = orders;
        //this.orderCount = orders.length;
        this.paginator.length = this.data?this.data.length:0;
        return merge(...dataMutations).pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }));
      });
      return observableOf(this.data);
    }
  
    disconnect() {}
  
    private getPagedData(data: SalesOrder[]) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data?data.splice(startIndex, this.paginator.pageSize):data;
    }
  
    private getSortedData(data: SalesOrder[]) {
      if (!this.sort.active || this.sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        const isAsc = this.sort.direction === 'asc';
        switch (this.sort.active) {
          case 'soldtoBPName': return compare(a.soldtoBPName, b.soldtoBPName, isAsc);
          case 'soldtoBP': return compare(+a.soldtoBP, +b.soldtoBP, isAsc);
          case 'total': return compare(+a.orderTotalUSD, +b.orderTotalUSD, isAsc);
          case 'plannedDeliveryDate': return compare(a.plannedDeliveryDate, b.plannedDeliveryDate, isAsc);
          case 'plannedReceiptDate': return compare(a.plannedReceiptDate, b.plannedReceiptDate, isAsc);
          case 'postal-code': return compare(a.postalAddress.zip, b.postalAddress.zip, isAsc);
          case 'status': return compare(a.orderStatus, b.orderStatus, isAsc);
          case 'orderNumber': return compare(+a.orderNumber, +b.orderNumber, isAsc);
          default: return 0;
        }
      });
    }
  }
  
  function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  