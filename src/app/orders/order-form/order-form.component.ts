import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../app.service";
import {SalesOrder} from "../../shared/models/sales-order";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;
  formBuilder: FormBuilder;
  order: SalesOrder;

  constructor(private appService: AppService,
              private fb: FormBuilder) {
    this.formBuilder = fb;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      deliveryAddress: [this.order.deliveryAddress, Validators.required],
      shipToBP: [this.order.shipToBP, Validators.required]
    })
  }
}
