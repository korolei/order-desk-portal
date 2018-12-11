import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from "./models/order.model";
import { Quote } from "./models/quote.model";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Order,
    Quote
  ]
})
export class SharedModule { }
