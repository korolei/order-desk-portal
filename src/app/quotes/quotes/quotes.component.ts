import { Component, OnInit } from '@angular/core';
import {Quote} from "@angular/compiler";
import {QuotesService} from "../quotes.service";

// @ts-ignore
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: []
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(q=> this.quotes = q);
  }

}
