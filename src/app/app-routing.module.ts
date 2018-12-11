import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuotesComponent} from "./quotes/quotes/quotes.component";

const routes: Routes = [
  { path: '', component: QuotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
