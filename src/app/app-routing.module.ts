import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuoteDetailComponent} from "./quotes/quote-detail/quote-detail.component";
import {OrdersComponent} from "./orders/orders/orders.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quote-detail', component: QuoteDetailComponent },
  { path: 'order-detail', component: OrdersComponent },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  { path: 'quotes', loadChildren: './quotes/quotes.module#QuotesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
