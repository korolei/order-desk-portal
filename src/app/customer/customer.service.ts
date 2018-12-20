import {Injectable} from '@angular/core';
import {Customer} from "../shared/models/customer";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {Observable} from "rxjs";
import {Quotation} from "../shared/models/quotation";
import {catchError, tap} from "rxjs/operators";
import {InstallBase} from "./models/install-base";
import {QuickAccountAging} from "./models/quick-account-aging";
import {CaseManagement} from "./models/case-management";
import {SalesOrder} from "../shared/models/sales-order";
import {Person} from "../shared/models/person";
import {IOrganization} from "../shared/interfaces/iorganization";
import {Organization} from "../shared/models/organization";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerApi = 'api/person/1';
  organizationApi = 'api/organization/1';
  installBaseApi = 'api/installBase/';
  quickAccountAgingApi = 'api/quickAccountAging/';
  caseManagementApi = 'api/caseManagement/';
  openQuotationsApi = 'api/quotes/';
  openSalesOrderApi = 'api/orders/';

  customer: Customer;
  constructor(private http: HttpClient,private appService: AppService) { }

  getCustomer(id:number): Observable<Person> {
    return this.http.get<Person>(this.customerApi)
      .pipe(
        tap(_ => this.appService.log('fetched customer info')),
        catchError(this.appService.handleError(this.customerApi, null))
      );
  }

  getOrganization(id:number): Observable<IOrganization> {
    return this.http.get<Organization>(this.organizationApi)
      .pipe(
        tap(_ => this.appService.log('fetched organization info')),
        catchError(this.appService.handleError(this.organizationApi, null))
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

  getOpenQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.openQuotationsApi)
      .pipe(
        tap(_ => this.appService.log('fetched Open Quotations info')),
        catchError(this.appService.handleError(this.openQuotationsApi, []))
      );
  }

  getOpenSalesOrders(): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(this.openSalesOrderApi)
      .pipe(
        tap(_ => this.appService.log('fetched Open Sales Orders info')),
        catchError(this.appService.handleError(this.openSalesOrderApi, []))
      );
  }
}
