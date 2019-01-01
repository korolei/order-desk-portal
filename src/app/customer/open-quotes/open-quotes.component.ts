import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Quotation} from "../../shared/models/quotation";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-open-quotes',
  templateUrl: './open-quotes.component.html'
})
export class OpenQuotesComponent implements OnInit {
@Input() openQuotes: Quotation[]=[];
  displayedColumns: string[] =       [
    'quoteNumber', 'soldToBPName', 'soldToBP',
    'totalUSD', 'creationDate', 'quotationStatus'
  ];
  dataSource: MatTableDataSource<Quotation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Quotation>(this.openQuotes);
    this.paginator.pageSize = 6;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
