import {Component, OnDestroy, OnInit} from '@angular/core';
import {IOrganization, Organization} from "../../shared/models/organization";
import {AppService} from "../../app.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ContactInfoComponent} from "../../customer/dialogs/contact-info/contact-info.component";
import {AppSettings} from "../../core/app-settings";

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styles: []
})
export class CustomerSearchComponent implements OnInit, OnDestroy{
  organizationApi = AppSettings.organizationApi;
  items: Organization[]=[];
  displayItem = (x: Organization) => x.bp_name.toUpperCase() + ', BP#: ' + x.contacts[0].bp_number;

  constructor(private appService: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.appService.getData<IOrganization[]>(`${this.organizationApi}`)
      .subscribe(data => {
        this.items = data.map(result => new Organization(result as IOrganization));
      });
  }

  public createNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '100%';
    dialogConfig.width = '75%';
    const dialogRef = this.dialog.open(ContactInfoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      val => {
        if(val){
          this.appService.onCustomerFound.next(val.id);
        }
      });
  }

  public handleHttpResult(result: Organization) {
    this.appService.onCustomerFound.next(result.id);
  }

  ngOnDestroy(): void {

  }
}
