import {Component, OnInit} from '@angular/core';
import {QuotesService} from "../quotes.service";
import {Quotation} from 'src/app/shared/models/quotation';

// @ts-ignore
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: []
})
export class QuotesComponent implements OnInit {
  quotes: Quotation[];
  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(q=> this.quotes = q);
  }
}
