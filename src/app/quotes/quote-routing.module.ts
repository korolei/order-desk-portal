import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QuotesComponent} from "./quotes/quotes.component";
import {QuoteFormComponent} from "./quote-form/quote-form.component";
import {QuoteDetailComponent} from "./quote-detail/quote-detail.component";

const routes: Routes = [
  {path: '*', component: QuotesComponent},
  {path: 'quote-form', component: QuoteFormComponent},
  {path: 'quote-details', component: QuoteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuoteRoutingModule { }
