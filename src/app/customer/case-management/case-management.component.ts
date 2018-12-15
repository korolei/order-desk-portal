import {Component, Input, OnInit} from '@angular/core';
import {CaseManagement} from "../models/case-management";
import {MatTableDataSource} from '@angular/material';
import {CaseManagementStatus} from "./../../shared/enums/case-management-status.enum";

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.component.html'
})
export class CaseManagementComponent implements OnInit {
  @Input() caseManagement: CaseManagement[]=[];
  displayedColumns: string[] = ['ticketNumber', 'dateOpened', 'urgency', 'status', 'note'];
  emergencyStatus: CaseManagementStatus = CaseManagementStatus[CaseManagementStatus.Emergency];
  dataSource: MatTableDataSource<CaseManagement>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<CaseManagement>(this.caseManagement);
  }
}
