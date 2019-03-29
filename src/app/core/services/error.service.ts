import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as StackTraceParser from 'error-stack-parser';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {AuthService} from "../../auth/auth.service";
import {SalesAgent} from "../../shared/models/sales-agent";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

constructor(private injector: Injector){}

  public static getClientErrorMessage(error: Error): string {
    return error.message ?
        error.message :
        error.toString();
  }
  public static getServerErrorMessage(error: HttpErrorResponse): string {
    return error.error ?
    error.error.message :
    error.message;
  }

  addContextInfo(error) {
    let authService = this.injector.get(AuthService);
    let userData = authService.getUserData() || new SalesAgent({loginId:'unknown'});
    
    const name = error.name || null;
    const appId = 'OrderDeskApp';
    const user = userData.userName;
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);
    return {name, appId, user, time, id, url, status, message, stack};
  }

}