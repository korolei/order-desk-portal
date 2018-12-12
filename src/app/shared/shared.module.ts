import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageService} from "./services/message.service";
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SideNavComponent
  ],
  providers: [
    MessageService
  ]
})
export class SharedModule { }
