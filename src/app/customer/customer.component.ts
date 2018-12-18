import {Component, OnInit} from '@angular/core';
import {InstallBase} from "./models/install-base";
import {CaseManagement} from "./models/case-management";
import {QuickAccountAging} from "./models/quick-account-aging";
import {Quote} from "../shared/models/quote";
import {Order} from "../shared/models/order";
import {CustomerService} from "./customer.service";
import {Person} from "../shared/models/person";
import {IAddress} from "../shared/interfaces/iaddress";
import {IOrganization} from "../shared/interfaces/iorganization";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  customerData: Person;
  installBaseData: InstallBase[] = [];
  caseManagementData: CaseManagement[] = [];
  quickAccountAgingData: QuickAccountAging[] = [];
  quotationsData: Quote[] = [];
  ordersData: Order[] = [];
  addresses: IAddress[] = [];
  organizationData: IOrganization;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer(1).subscribe(data => this.customerData = data);
    this.customerService.getOrganization(1).subscribe(data => {
      this.organizationData = data;
      this.addresses.push(data.address)
    });
    this.customerService.getCaseManagement().subscribe(data => this.caseManagementData = data);
    this.customerService.getInstalBase().subscribe(data => this.installBaseData = data);
    this.customerService.getOpenQuotations().subscribe(data => this.quotationsData = data);
    this.customerService.getOpenSalesOrders().subscribe(data => this.ordersData = data);
    this.customerService.getQuickAccountAging().subscribe(data => this.quickAccountAgingData = data);
  }
}
