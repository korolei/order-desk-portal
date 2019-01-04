import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Quotation} from "../../shared/models/quotation";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styles: []
})
export class QuoteFormComponent implements OnInit {
  form: FormGroup;
  quote: Quotation;

  constructor(private appService: AppService,
              public fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      deliveryAddress: [this.quote.deliveryAddress, Validators.required],
      shipToBP: [this.quote.shipToBP, Validators.required]
    })
  }

}
