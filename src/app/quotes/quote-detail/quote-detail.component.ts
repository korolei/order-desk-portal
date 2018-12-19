import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuotesService} from '../quotes.service';
import {Quotation} from 'src/app/shared/models/quotation';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: [
    '../../shared/styles/sale-details.css'
  ]
})
export class QuoteDetailComponent implements OnInit, OnDestroy {
  qouteId: number;
  quote: Quotation;
  private sub: any;
  constructor(private quoteService: QuotesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {
      this.qouteId = +params['id'];
      this.quoteService.getQuotes()
      .subscribe(quotes => {
        this.quote = quotes.find( quot => quot.id === this.qouteId );
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
