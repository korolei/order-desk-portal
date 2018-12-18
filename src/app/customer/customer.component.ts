import {Component, OnInit} from '@angular/core';
import {InstallBase} from "./models/install-base";
import {CaseManagement} from "./models/case-management";
import {QuickAccountAging} from "./models/quick-account-aging";
import {Quote} from "../shared/models/quote";
import {Order} from "../shared/models/order";
import {CustomerService} from "./customer.service";
import {Person} from "../shared/models/person";
import {Address} from "../shared/models/address";
import {Organization} from "../shared/models/organization";

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
  addresses: Address[] = [];
  organizationData: Organization;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer(1).subscribe(data => this.customerData = data);
    this.customerService.getOrganization(1).subscribe(data => {
      this.organizationData = new Organization(data);
      this.addresses.map(a=> new Address(a))
    });
    this.customerService.getCaseManagement().subscribe(data => this.caseManagementData = data);
    this.customerService.getInstalBase().subscribe(data => this.installBaseData = data);
    this.customerService.getOpenQuotations().subscribe(data => this.quotationsData = data);
    this.customerService.getOpenSalesOrders().subscribe(data => this.ordersData = data);
    this.customerService.getQuickAccountAging().subscribe(data => this.quickAccountAgingData = data);
  }
}
