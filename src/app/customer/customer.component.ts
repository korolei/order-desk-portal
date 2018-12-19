import {Component, OnInit} from '@angular/core';
import {InstallBase} from "./models/install-base";
import {CaseManagement} from "./models/case-management";
import {QuickAccountAging} from "./models/quick-account-aging";
import {SalesOrder} from "../shared/models/sales-order";
import {CustomerService} from "./customer.service";
import {Person} from "../shared/models/person";
import {Address} from "../shared/models/address";
import {Organization} from "../shared/models/organization";
import {Quotation} from "../shared/models/quotation";

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
  quotationsData: Quotation[] = [];
  ordersData: SalesOrder[] = [];
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
