import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [
    `
    .sidenav-container {
      height: 100%;
    }`,
    `
    .sidenav {
      width: 200px;
    }`,
    `
    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
    }
    `,
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
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }
