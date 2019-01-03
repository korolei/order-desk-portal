import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from "@angular/material";
import {InstallBase} from "../models/install-base";

@Component({
  selector: 'app-install-base',
  templateUrl: './install-base.component.html'
})
export class InstallBaseComponent implements OnInit {
  @Input() installBaseData: InstallBase[]=[];
  displayedColumns: string[] = ['machineNumber', 'dateInstalled', 'id'];
  dataSource: MatTableDataSource<InstallBase>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<InstallBase>(this.installBaseData);
    this.paginator.pageSize = 5;
    this.dataSource.paginator = this.paginator;
  }
}
