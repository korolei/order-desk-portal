import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from "./services/message.service";
import {OrderListComponent} from './order-list/order-list.component';
import {QuoteListComponent} from './quote-list/quote-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SideNavComponent} from './side-nav/side-nav.component';
import {MessagesComponent} from './messages/messages.component';
import {MaterialModule} from './modules/material.module';
import { AddressPipe } from '../pipes/address.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    OrderListComponent,
    QuoteListComponent,
    BrowserAnimationsModule,
    CommonModule,
    MessagesComponent,
    MaterialModule,
    SideNavComponent,
    AddressPipe
  ],
  providers: [
    MessageService
  ],
  declarations: [
    SideNavComponent,
    OrderListComponent,
    QuoteListComponent,
    MessagesComponent,
    AddressPipe
  ]
})
export class SharedModule { }
