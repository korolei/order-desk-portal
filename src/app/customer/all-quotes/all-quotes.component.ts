import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {CustomerService} from "../customer.service";
import {Quotation} from "../../shared/models/quotation";

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html'
})
export class AllQuotesComponent implements OnInit {
  @Input() openQuotes: Quotation[]=[];
  dataSource: MatTableDataSource<Quotation>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Quotation>(this.openQuotes);
  }

  toggleView(viewIndex: number){
    this.customerService.viewIndx.next(viewIndex)
  }
}
