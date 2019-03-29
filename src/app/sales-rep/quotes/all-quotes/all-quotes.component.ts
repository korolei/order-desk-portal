import {Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource, MatPaginator} from "@angular/material";
import {IQuotation, Quotation} from "../../../shared/models/quotation";
import {AppService} from "../../../app.service";
import {SalesRepService} from "../../sales-rep.service";
import {AppSettings} from "../../../core/app-settings";
import { Subscription } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';
import { OrderItem } from 'src/app/shared/models/order-item';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html'
})
export class AllQuotesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Quotation> = new MatTableDataSource<Quotation>();
  quotations: Quotation[]=[];
  orderItems: OrderItem[]=[];
  isLoading = false;
  salesOfficeCode = "";
  subscriptions: Subscription;
 
  constructor(private appService: AppService, 
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

  toggleView(viewIndex: number) {
    this.salesRepService.viewIndex.next(viewIndex);
  }

  getSalesRegionData(id: string, cacheData: boolean = true) {
    this.quotations = [];
    this.dataSource = new MatTableDataSource<Quotation>();
    if(id.length === 0) return;
    this.isLoading = true;
    
    this.subscriptions.add(this.appService.getData<IQuotation[]>(`${AppSettings.regionalQuotationsApi}?region=${id}&cacheData=${cacheData}`)
      .subscribe(data => {
        this.quotations = (data as IQuotation[]).map(item => new Quotation(item as IQuotation));
        this.dataSource.data = this.quotations;
        this.getParts();
        
        this.isLoading = false;
        
        this.dataSource.paginator = this.paginator;
        this.paginator.pageSize = AppSettings.pageSizeLg;
        this.paginator.hidePageSize = this.quotations.length < AppSettings.pageSizeLg;
      }));
  }
  
  getParts(){
    this.quotations.map(item => item.quotationLines.map(line =>
      this.orderItems.push(line)));
    this.orderItems = this.coreService.distinct(this.orderItems, "id").sort(s => s.id);  
  }

  filterByParts(partsId: string[]) {
    const quotes = partsId.length === 0 ? this.quotations : this.quotations.filter(o => o.quotationLines
      .some(l => partsId.some(p => p.toString() == l.item.toString())));
    const orderNums = quotes.length > 0 ? this.coreService.uniqueValues(quotes.map(o => o.quoteNumber.toString())) : [0];

    this.appService.onPartsSelected.next(orderNums);
  }

  cacheData(cache: boolean) {
      this.getSalesRegionData(this.salesOfficeCode, cache);
  }
    
  clearAllFilters() {
    this.appService.onClearAllFilters.next(true);
  }
}
