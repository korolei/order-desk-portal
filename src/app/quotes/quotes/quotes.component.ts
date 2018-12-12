import { Component, OnInit } from '@angular/core';
import {QuotesService} from "../quotes.service";
import { Quote } from 'src/app/shared/models/quote';

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
