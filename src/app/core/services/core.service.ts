import { Injectable } from '@angular/core';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {OrderFlag} from "../enums/order-flag.enum";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private sanitizer: DomSanitizer, private titleService: Title) { }

  public setTitle(newTitle: string){
    if(newTitle === ''){
      this.titleService.setTitle("Order Desk Portal");
    }
    else{
      this.titleService.setTitle(newTitle);
    }
  }
  
  public getStatusColor(status: string) {
    switch (status) {
      case "Credit Hold":
        return "primary";
      case "Internal Hold":
        return "warn";
      case "Blocked":
      case "Emergency":
        return "error";
      case "Modified":
        return "warn";
      default:
        return "";
    }
  }
  

  public getStatusFlag(flag: number) {
    const rushOrder = '<span class="green"><i class="space material-icons">local_shipping</i>Rush Order</span>';
    const follow = '<span class="yellow"><i class="space material-icons">flag</i>Follow</span>';
    const systemDowm = '<span class="red"><i class="space material-icons">warning</i>System Down</span>';

    switch (flag) {
      case OrderFlag.RushOrder:
        return this.sanitizer.bypassSecurityTrustHtml(rushOrder);
      case OrderFlag.Follow:  
        return this.sanitizer.bypassSecurityTrustHtml(follow);
      case OrderFlag.SystemDown:
        return this.sanitizer.bypassSecurityTrustHtml(systemDowm);
      case OrderFlag.RushOrder | OrderFlag.Follow:
        return this.sanitizer.bypassSecurityTrustHtml(rushOrder + follow);
      case OrderFlag.RushOrder | OrderFlag.SystemDown:
        return this.sanitizer.bypassSecurityTrustHtml(rushOrder + systemDowm);
      case OrderFlag.Follow | OrderFlag.SystemDown:
        return this.sanitizer.bypassSecurityTrustHtml(follow + systemDowm);
      case OrderFlag.RushOrder | OrderFlag.Follow | OrderFlag.SystemDown:
        return this.sanitizer.bypassSecurityTrustHtml(rushOrder + follow + systemDowm);
      default:
        return "";
    }
  }

  distinct(array: any[], propertyName: string) {
    return array.filter((e: { [x: string]: any; }, i: any) => array.findIndex((a: { [x: string]: any; }) => a[propertyName] === e[propertyName]) === i);
  }

  uniqueValues(array: any[]){
    return array.filter(function (value, index) { return array.indexOf(value) == index });
  }
  
  truncateText(txt: string, maxSize:number){
    return txt.length <= maxSize ? txt : txt.substring(0, maxSize);
  }

  formatPhoneNum(phoneNum: string) {
    if(phoneNum.startsWith('+')){
      return phoneNum.replace('+','001');
    }
    return phoneNum;
  }
}
