import {Component, OnDestroy, OnInit} from '@angular/core';
import {IOrganization, Organization} from "../../shared/models/organization";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styles: []
})
export class CustomerSearchComponent implements OnInit, OnDestroy{
  organizationApi = 'api/organization';
  private queryResult = '';
  items: Organization[]=[];
  displayItem = (x: Organization) => x.bp_name.toUpperCase() + ' #:' + x.contacts[0].bp_number;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getData<IOrganization[]>(`${this.organizationApi}`)
      .subscribe(data => {
        this.items = data.map(result => new Organization(result as IOrganization));
      });
  }

  public createNew(value: string) {

  }

  public handleHttpResult(result: Organization) {
    this.queryResult = result.bp_name;
    this.appService.onCustomerFound.next(result.id);
  }

  ngOnDestroy(): void {

  }
}
