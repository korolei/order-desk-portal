import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
    `
    .husky-icon{
      padding: 0 14px;
      color: maroon;
      font-size: 36px;
    }
    `,
    `
    .toolbar-spacer{
      flex: 1 0 auto;
    }
    `,
    `
    .top-bar{
      border: 2px solid crimson;
    }
    `,
    `
    .husky-logo{
      margin-left: 1em;
    }
    `,
    `
    .search-autocomplete {
      border: 1px solid #bcbcbc;
      border-radius: 4px;
      position: relative;
      text-align: left;
      width: 400px;
    }
    `,
    `
    .search-button {
      margin: 3px;
    }
    `,
    `
    .search-text {
      margin-left: 6px;
      width: 290px;
    }
    `
  ]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
