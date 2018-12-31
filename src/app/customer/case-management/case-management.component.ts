import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CaseManagement} from "../models/case-management";
import {MatPaginator, MatTableDataSource} from '@angular/material';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<CaseManagement>(this.caseManagement);
    //this.paginator.pageSize = 5;
    //this.dataSource.paginator = this.paginator;
  }
}
