import {Component, Input, OnInit} from '@angular/core';
import { MatTableDataSource} from "@angular/material";
import {QuickAccountAging} from "../models/quick-account-aging";

@Component({
  selector: 'app-quick-account-aging',
  templateUrl: './quick-account-aging.component.html'
})
export class QuickAccountAgingComponent implements OnInit {
  @Input() quickAccountAgingData: QuickAccountAging[]=[];
  displayedColumns: string[] = ['agingTerm', 'amount'];
  dataSource: MatTableDataSource<QuickAccountAging>;
  totalAmount: number;
  totalCurrencyCode: string;

  ngOnInit() {
    this.totalAmount = this.quickAccountAgingData.reduce(function(prev, cur) { return prev + cur.amount; }, 0) || 0;
    this.totalCurrencyCode = this.quickAccountAgingData[0].currencyCode || '';
    this.dataSource = new MatTableDataSource<QuickAccountAging>(this.quickAccountAgingData);
  }
}
