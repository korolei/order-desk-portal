import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {QuoteListComponent} from './quote-list/quote-list.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MaterialModule} from '../core/material.module';
import {RouterModule} from '@angular/router';
import {AddressPipe} from "../core/pipes/address.pipe";
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomerSearchComponent} from "./customer-search/customer-search.component";
import { AutocompleteComponent } from '../core/autocomplete/autocomplete.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    OrderListComponent,
    QuoteListComponent,
    MaterialModule,
    SideNavComponent,
    AddressPipe,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],

  declarations: [
    SideNavComponent,
    OrderListComponent,
    QuoteListComponent,
    CustomerSearchComponent,
    AddressPipe,
    AutocompleteComponent
  ],
  entryComponents: [
    CustomerSearchComponent
  ]
})
export class SharedModule { }
