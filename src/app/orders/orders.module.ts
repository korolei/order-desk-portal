import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, OrderRoutingModule
  ],
  declarations: [OrdersComponent, OrderFormComponent, OrderDetailComponent]
})
export class OrdersModule { }
