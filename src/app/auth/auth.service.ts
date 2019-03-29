import {EventEmitter, Injectable} from '@angular/core';
import { AppService } from '../app.service';
import { SalesAgent } from '../shared/models/sales-agent';
import { AppSettings } from '../core/app-settings';

@Injectable(({
  providedIn: 'root'
}) as any)
export class AuthService{
  userData: SalesAgent;
  public userFound =  new EventEmitter<boolean>();
  
  constructor(private appService: AppService) { }

  getUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    if(!this.userData){
      this.appService.getData<SalesAgent>(AppSettings.userDataApi)
      .subscribe(val => 
        {
          this.userData = new SalesAgent(val);
          localStorage.setItem("userData", JSON.stringify(this.userData));
          this.userFound.next(this.userData.employeeNumber.length > 0);
        }
      );
    }
    else{
      this.userFound.next(this.userData.employeeNumber.length > 0);
    }
    return this.userData;
  }

  static setUserData(user: SalesAgent){
    localStorage.setItem("userData", JSON.stringify(user));
  }
}
