import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders/orders/orders.component";
import {QuotesComponent} from "./quotes/quotes/quotes.component";
import { SalesRepComponent } from './sales-rep.component';
import {SharedModule} from "../shared/shared.module";
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { AllQuotesComponent } from './quotes/all-quotes/all-quotes.component';


const routes: Routes = [
  {path: '', component: SalesRepComponent}
];

@NgModule({
  declarations: [
    SalesRepComponent,
    OrdersComponent,
    QuotesComponent,
    AllOrdersComponent,
    AllQuotesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class SalesRepModule { }
