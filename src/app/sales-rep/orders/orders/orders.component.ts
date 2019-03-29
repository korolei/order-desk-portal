import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {AppSettings} from "../../../core/app-settings";
import {AppService} from "../../../app.service";
import {ISalesOrder, SalesOrder} from "../../../shared/models/sales-order";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {SalesRepService} from "../../sales-rep.service";
import { Subscription } from 'rxjs';
import { SalesAgent } from 'src/app/shared/models/sales-agent';
import { QuickLink } from 'src/app/shared/models/quick-link';
import { LinkTarget } from 'src/app/core/enums/link-target.enum';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit, OnDestroy {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  orders: SalesOrder[]=[];
  dataSource: MatTableDataSource<SalesOrder> = new MatTableDataSource<SalesOrder>();
  isLoading = false;
  subscriptions: Subscription;
  userInfo: SalesAgent;

  constructor(
    private appService: AppService, 
    private salesRepService: SalesRepService,
    private notifier: NotificationService) { }

  ngOnInit() {
    this.userInfo = this.salesRepService.getUserData() as SalesAgent;
    this.subscriptions = this.getData();
  }

  ngOnDestroy(): void {
    if(this.subscriptions)
    this.subscriptions.unsubscribe();
  }

  toggleView(viewIndex: number) {
    this.salesRepService.viewIndex.next(viewIndex);
  }
 
  viewNewOrder() {
    const userData = this.salesRepService.getUserData();
    const employeeNumber = userData !== null ? userData.employeeNumber : "";
    const quickLink: QuickLink = new QuickLink(LinkTarget.NewOrder, "", "", employeeNumber);
    this.appService.add(AppSettings.quickLinksApi, quickLink)
        .subscribe(val => {},
            error => this.notifier.showError(error));
  }

  getData(){
    this.isLoading = true;
    this.dataSource.data=[];
    const employeeNumber = this.userInfo !== null ? this.userInfo.employeeNumber : "";
    return this.appService.getData<ISalesOrder[]>(`${AppSettings.mySalesOrdersApi}?empNumber=${employeeNumber}`)
      .subscribe(data => {
        this.orders = (data as ISalesOrder[])
          .map(item => new SalesOrder(item as ISalesOrder));

        this.dataSource.data = this.orders;
        this.dataSource.paginator = this.paginator;
        this.paginator.pageSize = AppSettings.pageSizeLg;
        this.isLoading = false;
      });
  }
}
