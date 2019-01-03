import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements  OnInit{
  constructor(public snackBar: MatSnackBar, private appService: AppService) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  ngOnInit(): void {
    this.appService.showMessage.subscribe(val => this.openSnackBar(val, ""))
  }
}
