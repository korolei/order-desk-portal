import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {InstallBase} from "../models/install-base";
import {AppSettings} from "../../core/app-settings";
import {QuickLink} from "../../shared/models/quick-link";
import {LinkTarget} from "../../core/enums/link-target.enum";
import {AppService} from "../../app.service";
import {SalesRepService} from "../../sales-rep/sales-rep.service";
import {NotificationService} from "../../core/services/notification.service";
import {CoreService} from "../../core/services/core.service";

@Component({
  selector: 'app-install-base',
  templateUrl: './install-base.component.html',
  styleUrls:['./install-base.component.css']
})
export class InstallBaseComponent implements OnInit {
  @Input() installBaseData: InstallBase[]=[];
  displayedColumns: string[] = ['configuration','topItem','dateInstalled'];
  dataSource: MatTableDataSource<InstallBase>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private appService: AppService,
                private coreService: CoreService,
                private salesRepService: SalesRepService,
                private notifier: NotificationService) { }
                
  ngOnInit() {
    this.dataSource = new MatTableDataSource<InstallBase>(this.installBaseData);
    this.paginator.pageSize = AppSettings.pageSizeSm;
    this.paginator.hidePageSize = this.installBaseData.length < AppSettings.pageSizeSm;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.configuration.toLowerCase().includes(filter);
    };
  }

  viewBom(configuration: string) {
      if(configuration === '') return;

      const userData = this.salesRepService.getUserData();
      const employeeNumber = userData !== null ? userData.employeeNumber : "";
      const quickLink: QuickLink = new QuickLink(LinkTarget.Bom, "", "", "", employeeNumber,0,"",configuration);
      this.appService.add(AppSettings.quickLinksApi, quickLink)
          .subscribe(val => {},
              error => this.notifier.showError(error.body.error));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
