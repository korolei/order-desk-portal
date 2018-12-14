import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CaseManagement} from "../models/case-management";
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {CaseManagementStatus} from "./../../shared/enums/case-management-status.enum";

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html',
  styles: []
})
export class CaseManagementComponent implements OnInit {
@Input() caseManagement: CaseManagement[];
@ViewChild(MatPaginator) paginator: MatPaginator;
dataSource = new MatTableDataSource<CaseManagement>(this.caseManagement);
displayedColumns: string[] = ['Ticket #', 'Date Opened', 'Urgency', 'Status', 'Notes'];
  emergencyStatus: CaseManagementStatus = CaseManagementStatus[CaseManagementStatus.Emergency];

  constructor() { }

  ngOnInit() {
    this.paginator.pageSize=5;
    this.dataSource.paginator = this.paginator;
  }
}
