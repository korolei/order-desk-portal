import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {IQuotation, Quotation} from 'src/app/shared/models/quotation';
import {AppSettings} from "../../../core/app-settings";
import {AppService} from "../../../app.service";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {SalesRepService} from "../../sales-rep.service";
import { Subscription } from 'rxjs';
import {LinkTarget} from "../../../core/enums/link-target.enum";
import {NotificationService} from "../../../core/services/notification.service";
import { QuickLink } from 'src/app/shared/models/quick-link';
import { SalesAgent } from 'src/app/shared/models/sales-agent';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: []
})
export class QuotesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Quotation> = new MatTableDataSource<Quotation>();
  quotations: Quotation[]=[];
  selectedSoldtoBP: number = 0;
  isLoading = false;
  subscriptions: Subscription;
  filterValue="";
  userInfo: SalesAgent;
  
  constructor(private appService: AppService, 
    private salesRepService: SalesRepService, 
    private notifier: NotificationService) { }

  ngOnInit() {
    
    this.userInfo = this.salesRepService.getUserData() as SalesAgent;
    this.paginator.pageSize = AppSettings.pageSizeLg;
    this.subscriptions = this.appService.onQuotationSelected.subscribe((val: { soldtoBP: number; }) => this.selectedSoldtoBP = val.soldtoBP);
    this.subscriptions.add(this.getData());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleView(viewIndex: number) {
    this.salesRepService.viewIndex.next(viewIndex);
  }

  viewNewQuote() {
    const userData = this.salesRepService.getUserData();
    const employeeNumber = userData !== null ? userData.employeeNumber : "";
    const quickLink: QuickLink = new QuickLink(LinkTarget.NewQuote, "", "", employeeNumber);
    this.appService.add(AppSettings.quickLinksApi, quickLink)
        .subscribe(val => {},
            error => this.notifier.showError(error));
  }

  getData(){
    this.isLoading = true;
    this.dataSource.data = [];
    const employeeNumber = this.userInfo !== null ? this.userInfo.employeeNumber : "";
    return this.appService.getData<IQuotation[]>(`${AppSettings.myQuotationsApi}?empNumber=${employeeNumber}`)
      .subscribe(data => {
        this.quotations = (data as IQuotation[])
          .map(item => new Quotation(item as IQuotation));

        this.dataSource = new MatTableDataSource<Quotation>(this.quotations);
        this.dataSource.paginator = this.paginator;
        this.paginator.pageSize = AppSettings.pageSizeLg;
        this.isLoading = false;
      })
  }
}
