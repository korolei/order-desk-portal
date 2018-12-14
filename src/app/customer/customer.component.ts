import {Component, OnInit} from '@angular/core';
import {InstallBase} from "./models/install-base";
import {CaseManagement} from "./models/case-management";
import {QuickAccountAging} from "./models/quick-account-aging";
import {Customer} from "../shared/models/customer";
import {Quote} from "../shared/models/quote";
import {Order} from "../shared/models/order";
import {CustomerService} from "./customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  customerData: Customer;
  installBaseData: InstallBase[] = [];
  caseManagementData: CaseManagement[] = [];
  quickAccountAging: QuickAccountAging[] = [];
  quotationsData: Quote[] = [];
  ordersData: Order[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer(1).subscribe(data => this.customerData = data);
    this.customerService.getCaseManagement().subscribe(data => this.caseManagementData = data);
    this.customerService.getInstalBase().subscribe(data => this.installBaseData = data);
    this.customerService.getOpenQuotations().subscribe(data => this.quotationsData = data);
    this.customerService.getOpenSalesOrders().subscribe(data => this.ordersData = data);
    this.customerService.getQuickAccountAging().subscribe(data => this.quickAccountAging = data);
  }
}
