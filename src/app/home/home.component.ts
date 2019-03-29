import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppSettings} from "../core/app-settings";
import { SalesAgent } from '../shared/models/sales-agent';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
userData: SalesAgent;
isLoading: boolean;

  constructor(
    private authService: AuthService,
    private appService: AppService, 
    private router: Router, 
    private route:ActivatedRoute,
    private cd: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.userData = this.authService.getUserData();
    if(this.userData === null || this.userData.employeeNumber === ""){
      this.isLoading=true;
      this.appService.getData<SalesAgent>(AppSettings.userDataApi)
      .subscribe(val => 
        {
          this.userData = new SalesAgent(val);
          AuthService.setUserData(this.userData);
          this.isLoading=false;
        }
      );
    }
      
    this.route.queryParamMap.subscribe(params => {
      const queryParams = {...params.keys, ...params} as any;
      if(queryParams.params[AppSettings.PhoneNumParam] !== undefined)
      {
        this.router.navigate(['/customer'], { queryParams: { 'phoneNum':  queryParams.params[AppSettings.PhoneNumParam]} });
      }
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
