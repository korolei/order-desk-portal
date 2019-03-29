import {Component, Input, OnInit, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {SalesOrder} from '../models/sales-order';
import {MatSort, MatTableDataSource} from "@angular/material";
import {AppService} from "../../app.service";
import {AppSettings} from "../../core/app-settings";
import {LinkTarget} from "../../core/enums/link-target.enum";
import { NotificationService } from 'src/app/core/services/notification.service';
import {QuickLink} from "../models/quick-link";
import {CoreService} from "../../core/services/core.service";
import {FormControl} from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html'
})
export class OrderListComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() dataSource: MatTableDataSource<SalesOrder> = new MatTableDataSource<SalesOrder>();
  @Input() fullView: boolean = false;  
  @Input() isStickyHeader: boolean = false;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] =       [
    'orderNumber', 'soldtoBPName', 'soldtoBP', 'customerPO',
    'total', 'plannedDeliveryDate', 'plannedReceiptDate',
    'postalAddress.city', 'intSalesRepName','orderType', 'status'
  ];
  filteredValues = { 
    intSalesRepName: '', orderType: '', status: '', 
    orderNumber: '', soldtoBPName: '', bpNum:'', customerPo:'', filterByOrderNum:''};

  statuses:string[]=[];
  orderTypes: string[] = [];
  owners: string[] = [];
  statusesFormCtrl = new FormControl();
  orderTypeFormCtrl = new FormControl();
  ownerFormCtrl = new FormControl();
  bpNameFilter = new FormControl();
  bpNumFilter = new FormControl();
  customerPoFilter = new FormControl();
  orderNumFilter = new FormControl();
  subscriptions: Subscription;
  coreService: CoreService;
  
  constructor(private appService: AppService,
              private _coreService: CoreService,
              private notifier: NotificationService,
              private cd: ChangeDetectorRef) { 
    this.coreService = _coreService;
  }

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
    
    this.subscriptions.add(this.customerPoFilter.valueChanges.subscribe((customerPoFilterValue) => {
      this.filteredValues['customerPo'] = customerPoFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'customerPo';
    }));
    
    this.subscriptions.add(this.orderNumFilter.valueChanges.subscribe((orderNumFilterValue) => {
      this.filteredValues['filterByOrderNum'] = orderNumFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'filterByOrderNum';
    }));

    this.subscriptions.add(this.appService.onPartsSelected.subscribe((ordersNum: string) => {
      this.filteredValues['orderNumber'] = ordersNum;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      this.filteredValues['filterType'] = 'orderNumber';
    }));

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

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

  viewDetails(item: SalesOrder) {
    const quickLink: QuickLink = new QuickLink(LinkTarget.Order, item.orderNumber.toString(), "", "");
    this.appService.add(AppSettings.quickLinksApi, quickLink)
    .subscribe(val => this.notifier.showSuccess(val as any),
        error => this.notifier.showError(error.body.error));
  }

  customFilterPredicate() {
    return function (data: SalesOrder, filter: string): boolean {
      const matchFilter = [];
      let searchString = JSON.parse(filter);
      const selectedStatuses = (searchString.status as string[]) || [];
      const selectedSalesRepNames = (searchString.intSalesRepName as string[]) || [];
      const selectedOrderTypes = (searchString.orderType as string[]) || [];
      const selectedOrderNumbers = (searchString.orderNumber as string[]) || [];
      const filteredByOrderNumbers = searchString.filterByOrderNum.toLowerCase();
      const bpName = searchString.soldtoBPName.toLowerCase();
      const bpNum = searchString.bpNum.toLowerCase();
      const customerPo = searchString.customerPo.toLowerCase();
      
      if(selectedStatuses.length > 0){
        matchFilter.push(selectedStatuses.includes(data.status));
      }
      if(selectedSalesRepNames.length > 0){
        matchFilter.push(selectedSalesRepNames.includes(data.intSalesRepName));
      }
      if(selectedOrderTypes.length > 0){
        matchFilter.push(selectedOrderTypes.includes(data.orderType));
      }
      if(selectedOrderNumbers.length > 0){
        matchFilter.push(selectedOrderNumbers.includes(data.orderNumber.toString()));
      }
      if (filteredByOrderNumbers.length > 0) {
        matchFilter.push(data.orderNumber.toString().indexOf(filteredByOrderNumbers) !== -1);
      }
      if(bpName.length > 0){
        matchFilter.push(data.soldtoBPName.toLowerCase().indexOf(bpName) !== -1);
      }
      if (bpNum.length > 0) {
        matchFilter.push(data.soldtoBP.toString().toLowerCase().indexOf(bpNum) !== -1);
      }
      if (customerPo.length > 0) {
        matchFilter.push(data.customerPO.toString().toLowerCase().indexOf(customerPo) !== -1);
      }
      return matchFilter.every(Boolean);
    };
  }

  clearFilters(){
    this.bpNameFilter.setValue('');
    this.bpNumFilter.setValue('');
    this.customerPoFilter.setValue('');
    this.orderNumFilter.setValue('');
    this.statusesFormCtrl.setValue([]);
    this.orderTypeFormCtrl.setValue([]);
    this.ownerFormCtrl.setValue([]);
  }
}
