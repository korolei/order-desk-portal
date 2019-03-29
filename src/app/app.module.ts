import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
//import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService, CustomInterceptor} from "./app.service";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import {initConfig, RuntimeConfigLoaderModule, RuntimeConfigLoaderService} from "runtime-config-loader";
import {GlobalErrorHandler} from "./core/global-error-handler";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
//
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material';
import { Title} from '@angular/platform-browser';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // !environment.production ?
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false, delay: 1000 }
    // ) : [],
    RuntimeConfigLoaderModule.forRoot({ fileUrl: './assets/config.json'}),
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [ AppService, Title,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig},
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true},
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [RuntimeConfigLoaderService],
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
