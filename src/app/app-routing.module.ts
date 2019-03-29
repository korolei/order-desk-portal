import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthResolver} from "./auth/auth.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: AuthResolver},
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  { path: 'sales-rep', loadChildren: './sales-rep/sales-rep.module#SalesRepModule'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
