import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Order} from "./models/order.model";
import {Quote} from "@angular/compiler";

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
