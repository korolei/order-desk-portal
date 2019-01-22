import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: 'order-form', component: OrderFormComponent},
  {path: 'order-details', component: OrderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
