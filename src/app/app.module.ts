import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {AuthModule} from "./auth/auth.module";
import {OrdersModule} from "./orders/orders.module";
import {QuotesModule} from "./quotes/quotes.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    OrdersModule,
    QuotesModule,
    SharedModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
