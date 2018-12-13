import { Component, OnInit, Input } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Quote } from 'src/app/shared/models/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: [
    '../../shared/styles/sale-details.css'
  ]
})
export class QuoteDetailComponent implements OnInit {
  //@Input() 
    quote: Quote;
  constructor(private quoteService: QuotesService) { }

  ngOnInit() {
    this.quoteService.getQuotes()
    .subscribe(quotes => {
      this.quote = quotes[0];
    });
}

}
