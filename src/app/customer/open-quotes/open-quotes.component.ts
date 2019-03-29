import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Quotation} from "../../shared/models/quotation";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {CustomerService} from "../customer.service";
import {AppSettings} from "../../core/app-settings";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-open-quotes',
  templateUrl: './open-quotes.component.html'
})
export class OpenQuotesComponent implements OnInit {
@Input() openQuotes: Quotation[]=[];
  dataSource: MatTableDataSource<Quotation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService,private appService: AppService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Quotation>(this.openQuotes);
    this.paginator.pageSize = AppSettings.pageSizeSm;
    this.dataSource.paginator = this.paginator;
  }

  toggleView(viewIndex: number){
    this.customerService.viewIndx.next(viewIndex)
  }
}
