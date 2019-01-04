import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material.module';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import {QuoteRoutingModule} from "./quote-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    QuoteRoutingModule
  ],
  declarations: [
    QuotesComponent,
    QuoteDetailComponent,
    QuoteFormComponent
  ]
})
export class QuotesModule { }
