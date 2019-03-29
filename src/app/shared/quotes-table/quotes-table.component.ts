import {Component, Input, OnInit, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Quotation} from '../models/quotation';
import {MatSort, MatTableDataSource} from '@angular/material';
import {AppService} from "../../app.service";
import {AppSettings} from "../../core/app-settings";
import {LinkTarget} from "../../core/enums/link-target.enum";
import {NotificationService} from 'src/app/core/services/notification.service';
import {QuickLink} from '../models/quick-link';
import {CoreService} from "../../core/services/core.service";
import {FormControl} from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quotes-table',
  templateUrl: './quotes-table.component.html'
  })
export class QuoteListComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() dataSource: MatTableDataSource<Quotation> = new MatTableDataSource<Quotation>();
  @Input() fullView: boolean = false;
  @Input() isStickyHeader: boolean = false;
  @ViewChild(MatSort) sort: MatSort;

  
  displayedColumns: string[] =  [
    'quoteNumber', 'soldtoBPName', 'soldtoBP',
    'total', 'creationDate', 'expiryDate', 'postalAddress.city', 
    'intSalesRepName', 'orderType', 'status'
  ];

  filteredValues = { 
    intSalesRepName: '', orderType: '', status: '', orderNumber: '', 
    soldtoBPName: '', filterByQuoteNum:'', bpNum:'' 
  };

  statuses: string[] = [];
  orderTypes: string[] = [];
  owners: string[] = [];
  statusesFormCtrl = new FormControl();
  orderTypeFormCtrl = new FormControl();
  ownerFormCtrl = new FormControl();
  bpNameFilter = new FormControl();
  bpNumFilter = new FormControl();
  quoteNumFilter = new FormControl();
  subscriptions: Subscription;
  coreService: CoreService;

  constructor(
      private appService: AppService, 
      private _coreService: CoreService,
      private notifier: NotificationService,
      private cd: ChangeDetectorRef
  ) {this.coreService = _coreService;}

  ngOnInit() {
    this.subscriptions = this.appService.onClearAllFilters.subscribe(val => this.clearFilters());
    
    this.subscriptions.add(this.statusesFormCtrl.valueChanges.subscribe((statusesFormCtrlValue) => {
      this.filteredValues['status'] = statusesFormCtrlValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'status';
    }));

    this.subscriptions.add(this.orderTypeFormCtrl.valueChanges.subscribe((orderTypeFormCtrlValue) => {
      this.filteredValues['orderType'] = orderTypeFormCtrlValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'orderType';
    }));

    this.subscriptions.add(this.ownerFormCtrl.valueChanges.subscribe((ownerFormCtrlValue) => {
      this.filteredValues['intSalesRepName'] = ownerFormCtrlValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'intSalesRepName';
    }));

    this.subscriptions.add(this.bpNameFilter.valueChanges.subscribe((bpNameFilterValue) => {
      this.filteredValues['soldtoBPName'] = bpNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'soldtoBPName';
    }));

    this.subscriptions.add(this.bpNumFilter.valueChanges.subscribe((bpNumFilterValue) => {
      this.filteredValues['bpNum'] = bpNumFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'bpNum';
    }));

    this.subscriptions.add(this.quoteNumFilter.valueChanges.subscribe((quoteNumFilterValue) => {
      this.filteredValues['filterByQuoteNum'] = quoteNumFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'filterByQuoteNum';
    }));

    this.subscriptions.add(this.appService.onPartsSelected.subscribe((ordersNum: string) => {
      this.filteredValues['orderNumber'] = ordersNum;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'orderNumber';
    }));

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  //custom sorting
  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'postalAddress.city': return item.postalAddress.city;
        case 'total': return item.totalAmt;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
    this.statuses = this.coreService.uniqueValues(this.dataSource.data.map(s => s.status)).sort();
    this.owners = this.coreService.uniqueValues(this.dataSource.data.map(s => s.intSalesRepName)).sort();
    this.orderTypes = this.coreService.uniqueValues(this.dataSource.data.map(s => s.orderType)).sort();
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  //open in BaanLN app
  viewDetails(item: Quotation) {
    const quickLink: QuickLink = new QuickLink(LinkTarget.Quote, item.quoteNumber.toString(), "", "");
    this.appService.add(AppSettings.quickLinksApi, quickLink)
      .subscribe(val => this.notifier.showSuccess(val as any),
        error => this.notifier.showError(error.body.error));
  }

  //all filters
  customFilterPredicate() {
    return function (data: Quotation, filter: string): boolean {
      const matchFilter = [];
      let searchString = JSON.parse(filter);
      const selectedStatuses = (searchString.status as string[]) || [];
      const selectedSalesRepNames = (searchString.intSalesRepName as string[]) || [];
      const selectedOrderTypes = (searchString.orderType as string[]) || [];
      const selectedOrderNumbers = (searchString.orderNumber as string[]) || [];
      const filteredByQuoteNumbers = searchString.filterByQuoteNum.toLowerCase();
      const bpName = searchString.soldtoBPName.toLowerCase();
      const bpNum = searchString.bpNum.toLowerCase();

      if (selectedStatuses.length > 0) {
        matchFilter.push(selectedStatuses.includes(data.status));
      }
      if (selectedSalesRepNames.length > 0) {
        matchFilter.push(selectedSalesRepNames.includes(data.intSalesRepName));
      }
      if (selectedOrderTypes.length > 0) {
        matchFilter.push(selectedOrderTypes.includes(data.orderType));
      }
      if (selectedOrderNumbers.length > 0) {
        matchFilter.push(selectedOrderNumbers.includes(data.quoteNumber.toString()));
      }
      if (filteredByQuoteNumbers.length > 0) {
        matchFilter.push(data.quoteNumber.toString().indexOf(filteredByQuoteNumbers) !== -1);
      }
      if (bpName.length > 0) {
        matchFilter.push(data.soldtoBPName.toLowerCase().indexOf(bpName) !== -1);
      }      
      if (bpNum.length > 0) {
        matchFilter.push(data.soldtoBP.toString().toLowerCase().indexOf(bpNum) !== -1);
      }

      return matchFilter.every(Boolean);
    };
  }

  clearFilters(){
    this.bpNameFilter.setValue('');
    this.bpNumFilter.setValue('');
    this.quoteNumFilter.setValue('');
    this.statusesFormCtrl.setValue([]);
    this.orderTypeFormCtrl.setValue([]);
    this.ownerFormCtrl.setValue([]);
  }
}
