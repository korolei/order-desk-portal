import {Component, OnDestroy, OnInit} from '@angular/core';
import {SalesRepService, VIEW_SCREENS} from "./sales-rep.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sales-rep',
  templateUrl: './sales-rep.component.html'
})
export class SalesRepComponent implements OnInit, OnDestroy {
  allViewScreens  = VIEW_SCREENS;
  currentView = VIEW_SCREENS[0];
  subscriptions: Subscription;

  constructor(private salesRepService: SalesRepService) {}

  ngOnInit(): void {
    this.subscriptions = this.salesRepService.viewIndex.subscribe((val: string | number) => this.currentView = this.allViewScreens[val]);
  }

  ngOnDestroy(): void {
    if(this.subscriptions)
      this.subscriptions.unsubscribe();
  }

}
