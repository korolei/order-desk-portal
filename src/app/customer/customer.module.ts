import {NgModule} from '@angular/core';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from "./customer.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {InstallBaseComponent} from './install-base/install-base.component';
import {QuickAccountAgingComponent} from './quick-account-aging/quick-account-aging.component';
import {CaseManagementComponent} from './case-management/case-management.component';
import {OpenQuotesComponent} from './open-quotes/open-quotes.component';
import {OpenOrdersComponent} from './open-orders/open-orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    InstallBaseComponent,
    QuickAccountAgingComponent,
    CaseManagementComponent,
    OpenQuotesComponent,
    OpenOrdersComponent,
    AllOrdersComponent,
    AllQuotesComponent
  ],
  entryComponents: [

  ]
})
export class CustomerModule { }
