import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { OrderListComponent} from './orders-table/orders-table.component';
import { QuoteListComponent} from './quotes-table/quotes-table.component';
import { SideNavComponent} from './side-nav/side-nav.component';
import { MaterialModule} from '../core/material.module';
import { RouterModule} from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from '../core/autocomplete/autocomplete.component';
import { HomeComponent} from "../home/home.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SafeUrlPipe} from "../core/pipes/safe-url.pipe";
import { LayoutModule } from '@angular/cdk/layout';
import { CustomerSearchComponent} from "./customer-search/customer-search.component";
import { SalesRegionsComponent} from "../sales-rep/sales-regions/sales-regions.component";
import { PartsSearchComponent } from './parts-search/parts-search.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    LayoutModule
  ],
  exports: [
    OrderListComponent,
    QuoteListComponent,
    MaterialModule,
    SideNavComponent,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    SafeUrlPipe,
    CustomerSearchComponent,
    SalesRegionsComponent,
    PartsSearchComponent
  ],

  declarations: [
    SideNavComponent,
    OrderListComponent,
    QuoteListComponent,
    AutocompleteComponent,
    SafeUrlPipe,
    HomeComponent,
    CustomerSearchComponent,
    SalesRegionsComponent,
    PartsSearchComponent
  ],
  entryComponents: [
    CustomerSearchComponent,
    SalesRegionsComponent
  ]
})
export class SharedModule { }
