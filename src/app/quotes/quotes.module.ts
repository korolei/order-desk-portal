import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuotesService} from "./quotes.service";
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuotesComponent
  ],
  providers: [
    QuotesService
  ]
})
export class QuotesModule { }
