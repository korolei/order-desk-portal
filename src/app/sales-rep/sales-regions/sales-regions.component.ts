import { Component, OnInit } from '@angular/core';
import {AppSettings} from "../../core/app-settings";
import {AppService} from "../../app.service";
import {ISalesRegion, SalesRegion} from "../../shared/models/sales-region";
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { SalesAgent } from 'src/app/shared/models/sales-agent';
import {CoreService} from "../../core/services/core.service";

@Component({
  selector: 'app-sales-regions',
  templateUrl: './sales-regions.component.html',
  styleUrls: ['./sales-regions.component.css']
})
export class SalesRegionsComponent implements OnInit {
  salesRegionData: SalesRegion[]=[];
  userData: SalesAgent;
  defaultSalesOffice = "";
  selectedSalesOffice = "";
  checked = false;
  subscription: Subscription;

  constructor(private appService: AppService, private authService: AuthService, private coreService: CoreService) { }

  ngOnInit() {
    this.subscription = this.appService.getData<ISalesRegion[]>(`${AppSettings.salesRegionsApi}`)
      .subscribe(data => {
        this.salesRegionData = (data as ISalesRegion[])
          .map(item => new SalesRegion(item as ISalesRegion));
        this.getUserData();
      });

  }

  onSalesRegionSelected(code: string){
    this.selectedSalesOffice = code;
    this.coreService.setTitle(`Sales Office: ${code}`);
    this.isChecked();
    this.appService.onSalesRegionSelected.next(code);
  }

  getUserData(){
    this.userData = this.authService.getUserData();
    if(this.userData){
        this.defaultSalesOffice = this.userData.salesOffice;
        this.selectedSalesOffice = this.userData.salesOffice;
        this.onSalesRegionSelected(this.selectedSalesOffice);
    }
  }

  isChecked(){
    if(this.defaultSalesOffice === ""){
      this.checked = false;
    }
    else{
      this.checked = this.defaultSalesOffice == this.selectedSalesOffice;
    }
  }

  onChecked(){
    this.checked = !this.checked;
    if(this.checked){
      this.userData.salesOffice = this.selectedSalesOffice;
    }
    else{
      this.userData.salesOffice = "";
    }
    AuthService.setUserData(this.userData);
  }
}
