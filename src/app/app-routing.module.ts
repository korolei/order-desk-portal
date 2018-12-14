import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
   { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
   { path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
   { path: 'quotes', loadChildren: './quotes/quotes.module#QuotesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
