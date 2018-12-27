import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from "./services/message.service";
import {OrderListComponent} from './order-list/order-list.component';
import {QuoteListComponent} from './quote-list/quote-list.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MessagesComponent} from './messages/messages.component';
import {MaterialModule} from './modules/material.module';
import {RouterModule} from '@angular/router';
import {AddressPipe} from "./pipes/address.pipe";
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import {CustomerSearchComponent} from "./customer-search/customer-search.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypeaheadModule
  ],
  exports: [
    OrderListComponent,
    QuoteListComponent,
    MessagesComponent,
    MaterialModule,
    SideNavComponent,
    AddressPipe,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypeaheadModule
  ],
  providers: [
    MessageService
  ],
  declarations: [
    SideNavComponent,
    OrderListComponent,
    QuoteListComponent,
    MessagesComponent,
    CustomerSearchComponent,
    AddressPipe
  ],
  entryComponents: [
    CustomerSearchComponent
  ],
})
export class SharedModule { }
