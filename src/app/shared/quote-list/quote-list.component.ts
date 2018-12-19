import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Quotation} from '../models/quotation';
import {QuotesService} from 'src/app/quotes/quotes.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styles: [
    `
    table {
      width: 100%;
    }
    `
    ,
    `
    .new-order {
        margin-left: 5em;
    }
    `
    ,
    `
    .subtitle{
      font-size: smaller;
      padding-left: 2em;
    }
    `
    ,
    `  
    .warn {
      font-size: smaller;
      color: red;
    }  
    `
    ,
    `  
    .normal {
      font-size: smaller;
      color: navy;
    }  
    `
    ]
  })
export class QuoteListComponent implements OnInit {

  @Input() showOrders: boolean;
  list: Quotation[];
  count: number;
  displayColumns: string[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Quotation> = new MatTableDataSource<Quotation>();
  constructor(private quoteService: QuotesService) {

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.displayColumns =
      [
        'id', 'customer.name', 'customer.id',
        'total', 'quotedOn',
        'status'
      ];
      this.quoteService.getQuotes()
        .subscribe(quotes => {
          this.list = quotes;
          this.count = this.list.length;
          this.dataSource.data = this.list;
        });
    }
}
