import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../models/quote.model';
import { QuotesService } from 'src/app/quotes/quotes.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styles: []
})
export class QuoteListComponent implements OnInit {

  @Input() showOrders: boolean;
  list: Quote[];
  count: number;
  displayColumns: string[];
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //dataSource: MatTableDataSource<Order>;
  constructor(private quoteService: QuotesService) { 
    
  }

  ngOnInit() {
      this.displayColumns = 
      [
        'id', 'customer.name', 'customer.id', 
        'total', 'quotedOn',
        'status'
      ];
      this.quoteService.getQuotes()
        .subscribe(quotes => {
          this.list = quotes;

        });
    }
}
