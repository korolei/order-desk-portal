import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
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
  organizationsData: Organization[]=[];

  public handleHttpResult(result: Organization) {
    this.queryResult = result.bp_name;
    this.appService.onCustomerFound.next(result.id);
  }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getData<IOrganization[]>(`${this.organizationApi}`)
      .subscribe(data => {
        this.organizationsData = data.map(result => new Organization(result as IOrganization));
      });
  }

  ngOnDestroy(): void {

  }
}
