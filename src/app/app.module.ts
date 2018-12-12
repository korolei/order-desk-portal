import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from "./app.service";
import {AuthModule} from "./auth/auth.module";
import {OrdersModule} from "./orders/orders.module";
import {QuotesModule} from "./quotes/quotes.module";
import {SharedModule} from "./shared/shared.module";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MaterialModule} from './shared/modules/material.module';
import {CustomerComponent} from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1500 }
    ),
    AppRoutingModule,
    AuthModule,
    OrdersModule,
    QuotesModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
