import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from "./services/message.service";
import {OrderListComponent} from './order-list/order-list.component';
import {QuoteListComponent} from './quote-list/quote-list.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MessagesComponent} from './messages/messages.component';
import {MaterialModule} from './modules/material.module';
import {RouterModule} from '@angular/router';
import { AddressPipe } from '../pipes/address.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    OrderListComponent,
    QuoteListComponent,
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
