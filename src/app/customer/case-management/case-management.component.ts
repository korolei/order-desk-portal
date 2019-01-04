import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CaseManagement} from "../models/case-management";
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {CaseManagementStatus} from "./../../core/enums/case-management-status.enum";
import {NotesComponent} from "../dialogs/notes/notes.component";
import {AppService} from "../../app.service";

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

  constructor(private appService: AppService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<CaseManagement>(this.caseManagement);
    this.paginator.pageSize = 5;
    this.dataSource.paginator = this.paginator;
  }

  editNote(item: CaseManagement) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '450px';
    dialogConfig.width = '500px';
    dialogConfig.data = item;
    const dialogRef = this.dialog.open(NotesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      val => {
        if(val){
          item = val;
        }
      });
  }
}
