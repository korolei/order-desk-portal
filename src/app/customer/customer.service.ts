import {Injectable} from '@angular/core';
import {Customer} from "../shared/models/customer";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {Observable} from "rxjs";
import {Quote} from "../shared/models/quote";
import {catchError, tap} from "rxjs/operators";
import {InstallBase} from "./models/install-base";
import {QuickAccountAging} from "./models/quick-account-aging";
import {CaseManagement} from "./models/case-management";
import {Order} from "../shared/models/order";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerApi = 'api/customer/1';
  installBaseApi = 'api/install-base/1';
  quickAccountAgingApi = 'api/quick-account-aging/1';
  caseManagementApi = 'api/case-management/1';
  openQuotationsApi = 'api/open-quotations/1';
  openSalesOrderApi = 'api/open-sales-order/1';

  customer: Customer;
  constructor(private http: HttpClient,private appService: AppService) { }

  getCustomer(id:number): Observable<Customer> {
    return this.http.get<Customer>(this.customerApi)
      .pipe(
        tap(_ => this.appService.log('fetched customer info')),
        catchError(this.appService.handleError(this.customerApi, null))
      );
  }

  getInstalBase(): Observable<InstallBase[]> {
    return this.http.get<InstallBase[]>(this.installBaseApi)
      .pipe(
        tap(_ => this.appService.log('fetched instal base info')),
        catchError(this.appService.handleError(this.installBaseApi, []))
      );
  }

  getQuickAccountAging(): Observable<QuickAccountAging[]> {
    return this.http.get<QuickAccountAging[]>(this.quickAccountAgingApi)
      .pipe(
        tap(_ => this.appService.log('fetched Quick Account Aging info')),
        catchError(this.appService.handleError(this.quickAccountAgingApi, []))
      );
  }

  getCaseManagement(): Observable<CaseManagement[]> {
    return this.http.get<CaseManagement[]>(this.caseManagementApi)
      .pipe(
        tap(_ => this.appService.log('fetched Case Management info')),
        catchError(this.appService.handleError(this.customerApi, []))
      );
  }

  getOpenQuotations(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.openQuotationsApi)
      .pipe(
        tap(_ => this.appService.log('fetched Open Quotations info')),
        catchError(this.appService.handleError(this.openQuotationsApi, []))
      );
  }

  getOpenSalesOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.openSalesOrderApi)
      .pipe(
        tap(_ => this.appService.log('fetched Open Sales Orders info')),
        catchError(this.appService.handleError(this.openSalesOrderApi, []))
      );
  }
}
