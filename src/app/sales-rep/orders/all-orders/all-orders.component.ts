import {Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {ISalesOrder, SalesOrder} from "../../../shared/models/sales-order";
import {MatTableDataSource, MatPaginator} from "@angular/material";
import {AppService} from "../../../app.service";
import {SalesRepService} from "../../sales-rep.service";
import {AppSettings} from "../../../core/app-settings";
import { Subscription } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';
import { OrderItem } from 'src/app/shared/models/order-item';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html'
})
export class AllOrdersComponent implements OnInit, OnDestroy {
@ViewChild(MatPaginator) paginator: MatPaginator;
dataSource: MatTableDataSource<SalesOrder> = new MatTableDataSource<SalesOrder>();
orders: SalesOrder[]=[];
orderItems: OrderItem[]=[];
subscriptions: Subscription;
isLoading = false;
salesOfficeCode = "";

  constructor(
    private appService: AppService, 
    private salesRepService: SalesRepService,
    private coreService: CoreService) { }

  ngOnInit() {
    this.appService.showSalesRegions.next(true);
    this.subscriptions = this.appService.onSalesRegionSelected.subscribe(
      (      id: string) => {
        this.salesOfficeCode = id;
        this.getSalesRegionData(id);
      });
  }

  ngOnDestroy(): void {
    this.appService.showSalesRegions.next(false);
    if(this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  getSalesRegionData(id: string, cacheData: boolean = true){
    this.orders = [];
    this.dataSource = new MatTableDataSource<SalesOrder>();

    if(id.length === 0) return;
    this.isLoading=true;
    
    this.subscriptions.add(this.appService.getData<ISalesOrder[]>(`${AppSettings.mySalesOrdersApi}?region=${id}&cacheData=${cacheData}`)
      .subscribe(data => {
        this.orders = (data as ISalesOrder[]).map(item => new SalesOrder(item as ISalesOrder));
        this.dataSource.data = this.orders;
        this.dataSource.paginator = this.paginator;
        this.paginator.pageSize = AppSettings.pageSizeLg;        
        this.getParts();
        this.isLoading=false;  
      }));
  }

  toggleView(viewIndex: number) {
    this.salesRepService.viewIndex.next(viewIndex);
  }

  getParts(){
      this.orders.map(item => item.salesOrderLines.map(line=>
        this.orderItems.push(line)));
    this.orderItems = this.coreService.distinct(this.orderItems, "id").sort(s=>s.id);  
  }

  filterByParts(partsId: string[]){
    const filteredOrders= partsId.length === 0 ? this.orders : 
      this.orders.filter(o=> partsId.every(p=> o.salesOrderLines.some(sol=> sol.item.toString() === p)))
    const orderNums = filteredOrders.length > 0 ? this.coreService.uniqueValues(filteredOrders.map(o=> o.orderNumber.toString())) : [0];
    this.appService.onPartsSelected.next(orderNums);
  }
    
  cacheData(cache: boolean) {
      this.getSalesRegionData(this.salesOfficeCode, cache);
  }

    clearAllFilters() {
        this.appService.onClearAllFilters.next(true);
    }
}
