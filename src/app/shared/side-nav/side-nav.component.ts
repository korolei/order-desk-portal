import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  Input,
  AfterContentInit
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {CustomerSearchComponent} from "../customer-search/customer-search.component";
import {AppService} from "../../app.service";
import {SalesRegionsComponent} from "../../sales-rep/sales-regions/sales-regions.component";
import {AuthService} from "../../auth/auth.service";
import { QuickLink } from '../models/quick-link';
import { AppSettings } from 'src/app/core/app-settings';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
    `.sidenav-container {height: 100%; vertical-align: center;}`,
    `.sidenav {width: 17%; vertical-align: bottom;line-height: 60px;}`,
    `.top-toolbar {background-color: white; color: black;}`,
    `.husky-logo {margin-left: 1.5em; margin-right: 2em; margin-top: 0.8em; position: relative;}`
  ]
})
export class SideNavComponent implements OnInit, OnDestroy, AfterContentInit{
  customerSearchRef: ComponentRef<CustomerSearchComponent>;
  salesRegionsRef: ComponentRef<SalesRegionsComponent>;
  userFound: boolean;
  huskyLinks: any[]=[];
  subscriptions: Subscription;
  @Input() openedSubject: Subject<boolean>;
  @ViewChild('drawer') drawer: MatSidenav;
  @ViewChild('customerSearch', {read: ViewContainerRef}) customerSearch: ViewContainerRef;
  @ViewChild('salesRegions', {read: ViewContainerRef}) salesRegions: ViewContainerRef;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver,
              private ComponentFactoryResolver: ComponentFactoryResolver,
              private appService: AppService,
              private authService: AuthService) {}

  ngAfterContentInit() {
    if(this.openedSubject){
      this.subscriptions.add(this.openedSubject.subscribe(
          keepOpen => this.drawer[keepOpen ? 'open' : 'close']()
      ));      
    }
  }

  ngOnDestroy(): void {
    if(this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  public showCustomerSearch() {
    if (!this.customerSearchRef) {
      const customerSearchComponent = this.ComponentFactoryResolver.resolveComponentFactory(CustomerSearchComponent);
      this.customerSearchRef = this.customerSearch.createComponent(customerSearchComponent);
    }
    this.customerSearchRef.changeDetectorRef.detectChanges();
  }

  destroyCustomerSearch() {
    if (this.customerSearchRef) {
      this.customerSearchRef.destroy();
      delete this.customerSearchRef;
    }
  }

  public showSalesRegions() {
    if (!this.salesRegionsRef) {
      const salesRegionsComponent = this.ComponentFactoryResolver.resolveComponentFactory(SalesRegionsComponent);
      this.salesRegionsRef = this.salesRegions.createComponent(salesRegionsComponent);
    }
    this.salesRegionsRef.changeDetectorRef.detectChanges();
  }

  destroySalesRegions() {
    if (this.salesRegionsRef) {
      this.salesRegionsRef.destroy();
      delete this.salesRegionsRef;
    }
  }

  ngOnInit(): void {
    this.subscriptions=this.appService.showCustomerSearch.subscribe(
      (val: boolean)=> val === true ? this.showCustomerSearch() : this.destroyCustomerSearch());
      this.subscriptions.add(this.appService.showSalesRegions.subscribe(
      (val: boolean)=> val === true ? this.showSalesRegions() : this.destroySalesRegions()));
    
    this.subscriptions.add(this.authService.userFound.subscribe((val: boolean)=> this.userFound = val));
    this.subscriptions.add(this.appService.getData(AppSettings.huskyLinks).subscribe(
      val => this.huskyLinks = val as any[]
    ))
  }

  showQuickLink(linkTarget: number){
    const qLink = new QuickLink(linkTarget);
    this.subscriptions.add(this.appService.add(AppSettings.quickLinksApi, qLink).subscribe());
  }

  toggle() {
    this.openedSubject.next(!this.drawer.opened);
  }
  }
