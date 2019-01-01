import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="grid-container">
    <mat-grid-list cols="2">
      <mat-grid-tile>
          <app-quote-list class="dashboard-card"></app-quote-list>
      </mat-grid-tile>
      <mat-grid-tile>
          <app-order-list class="dashboard-card"></app-order-list>
      </mat-grid-tile>
    </mat-grid-list>
  </div>
  `,
  styles: [
    `
    .dashboard-card {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
    }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
