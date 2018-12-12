import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="grid-container">
    <mat-grid-list cols="2">
      <mat-grid-tile>
          <app-quote-list></app-quote-list>
      </mat-grid-tile>
      <mat-grid-tile>
          <app-order-list></app-order-list>
      </mat-grid-tile>
    </mat-grid-list>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
