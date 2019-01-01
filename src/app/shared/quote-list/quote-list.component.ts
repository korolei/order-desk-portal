import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IQuotation, Quotation} from '../models/quotation';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AppService} from "../../app.service";
import {AppSettings} from "../app-settings";
import {BehaviorSubject} from "rxjs";

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
  displayedColumns: string[] =       [
    'quoteNumber', 'soldToBPName', 'soldToBP',
    'totalUSD', 'creationDate', 'quotationStatus'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Quotation> = new MatTableDataSource<Quotation>();
  public isLoading = new BehaviorSubject<boolean>(false);

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isLoading.next(true);
    this.appService.getData<IQuotation[]>(AppSettings.openQuotationsApi)
      .subscribe(data => {
        this.dataSource.data = (data as IQuotation[])
        .map(item => new Quotation(item as IQuotation));
        this.isLoading.next(false);
      });

    this.paginator.pageSize = 10;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
}
