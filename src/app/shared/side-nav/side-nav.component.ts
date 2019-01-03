import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CustomerSearchComponent} from "../customer-search/customer-search.component";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
    `.sidenav-container {height: 100%; vertical-align: center;}`,
    `.sidenav {width: 17%; vertical-align: center;}`,
    `.top-toolbar {background-color: white; color: black;}`,
    `.husky-logo {margin-left: 1.5em; margin-right: 2em; margin-top: 0.8em; position: relative;}`
  ]
})
export class SideNavComponent implements OnInit{
  customerSearchRef: ComponentRef<CustomerSearchComponent>;
  @ViewChild('customerSearch', {read: ViewContainerRef}) customerSearch: ViewContainerRef;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private ComponentFactoryResolver: ComponentFactoryResolver,
              private appService: AppService) {}

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

  ngOnInit(): void {
    this.appService.showCustomerSearch.subscribe(
      (val)=> val === true ? this.showCustomerSearch() : this.destroyCustomerSearch())
  }
  }
