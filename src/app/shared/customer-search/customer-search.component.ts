import {Component, OnInit, OnDestroy} from '@angular/core';
import {IOrganization, Organization} from "../models/organization";
import {AppService} from "../../app.service";
import {AppSettings} from "../../core/app-settings";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styles: []
})
export class CustomerSearchComponent implements OnInit, OnDestroy{

  organizationApi = AppSettings.organizationApi;
  items: Organization[]=[];
  isLoading: boolean;
  subscription: Subscription;
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.subscription = this.appService.getData<IOrganization[]>(`${this.organizationApi}`)
      .subscribe(data => {
        this.items = data.map(result => new Organization(result as IOrganization));
        this.isLoading=false;
      });
  }

  displayItem = (x: Organization) => {
    if(x.bp_name !== undefined)
    return x.bp_name.toUpperCase() + ', BP#: ' + x.bp_number
    return '';
  };


  public handleHttpResult(result: Organization) {
    if(result !== undefined)
      this.appService.onCustomerFound.next(result);
  }

  ngOnDestroy(): void {
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
