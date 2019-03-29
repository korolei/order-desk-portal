import {Component, Input, OnInit} from '@angular/core';
import { MatTableDataSource} from "@angular/material";
import {QuickAccountAging, QuickAccountAgingRow} from "../models/quick-account-aging";

@Component({
  selector: 'app-quick-account-aging',
  templateUrl: './quick-account-aging.component.html'
})
export class QuickAccountAgingComponent implements OnInit {
  @Input() quickAccountAgingData: QuickAccountAging;
  dataSource: MatTableDataSource<QuickAccountAgingRow>;
  displayedColumns: string[] = ['agingTerm', 'amount'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource<QuickAccountAgingRow>(
        this.quickAccountAgingData ? 
        this.quickAccountAgingData.qAARows:[]);
  }
}
