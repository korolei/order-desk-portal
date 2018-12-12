import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from "./services/message.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SideNavComponent} from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CommonModule,
    SideNavComponent
  ],
  providers: [
    MessageService
  ]
})
export class SharedModule { }
