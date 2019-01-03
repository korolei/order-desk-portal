import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesService } from "./quotes.service";
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    QuotesComponent,
    QuoteDetailComponent
  ],
  providers: [
    QuotesService
  ]
})
export class QuotesModule { }
