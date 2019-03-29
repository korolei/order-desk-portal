import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CaseManagement} from "../models/case-management";
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { CoreService } from "../../core/services/core.service";
import {AppSettings} from "../../core/app-settings";

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styleUrls: ['./case-management.component.css']
})
export class CaseManagementComponent implements OnInit {
  @Input() caseManagement: CaseManagement[]=[];
  displayedColumns: string[] = ['ticketNumber', 'dateOpened', 'urgency', 'status', 'notes'];
  dataSource: MatTableDataSource<CaseManagement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<CaseManagement>(this.caseManagement);
    this.paginator.pageSize = AppSettings.pageSizeSm;
    this.dataSource.paginator = this.paginator;
  }
}
