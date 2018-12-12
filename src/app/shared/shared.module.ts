import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from "./services/message.service";
import { OrderListComponent } from './order-list/order-list.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@NgModule({
  // declarations: [
  //   SideNavComponent
  // ],
  imports: [
    CommonModule,
    // OrderListComponent,
    // QuoteListComponent
  ],
  exports: [
    OrderListComponent,
    QuoteListComponent
  ],
  providers: [
    MessageService
  ],
  declarations: [OrderListComponent, QuoteListComponent]
})
export class SharedModule { }
