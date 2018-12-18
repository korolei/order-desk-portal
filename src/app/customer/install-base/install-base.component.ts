import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {InstallBase} from "../models/install-base";

@Component({
  selector: 'app-install-base',
  templateUrl: './install-base.component.html',
  styles: []
})
export class InstallBaseComponent implements OnInit {
  @Input() installBaseData: InstallBase[]=[];
  displayedColumns: string[] = ['machineNumber', 'dateInstalled', 'id'];
  dataSource: MatTableDataSource<InstallBase>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<InstallBase>(this.installBaseData);
  }
}
