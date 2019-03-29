import { Injectable } from '@angular/core';
import {AppService} from "../../app.service";
import {AppSettings} from "../app-settings";
import { delay, shareReplay } from 'rxjs/operators';
import {WebApiError} from "../../shared/models/web-api-error";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(private appService: AppService){}

  logError(error: WebApiError) {
    // Send errors to server here
    console.log('Log message: ' + error.details);
    
   this.appService.add(AppSettings.errorLogApi, error).pipe(shareReplay(1,1000)).subscribe(()=> delay(1000));
  }
}