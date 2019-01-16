import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
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
