import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {retry, timeout, shareReplay} from "rxjs/operators";
import {Quotation} from './shared/models/quotation';
import {Organization} from './shared/models/organization';
import {LocationStrategy} from "@angular/common";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(({
  providedIn: 'root'
}) as any)
export class AppService {
  public baseUrl: string;
  public showCustomerSearch =  new EventEmitter<boolean>();
  public onCustomerFound: EventEmitter<Organization> = new EventEmitter<Organization>();
  public onQuotationSelected: EventEmitter<Quotation> = new EventEmitter<Quotation>();
  public showSalesRegions = new EventEmitter<boolean>();
  public onSalesRegionSelected: EventEmitter<any> = new EventEmitter<any>();
  public onPartsSelected: EventEmitter<string[]> = new EventEmitter<string[]>();
  public onClearAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();
  public loadingSubject = new EventEmitter<boolean>(false);
  
  constructor(
    private http: HttpClient,
    private locationStrategy: LocationStrategy) {
      this.baseUrl = this.locationStrategy.getBaseHref();
    }

  public getData<T>(endPoint: string): Observable<T> {
    this.loadingSubject.next(true);
    return this.http.get<T>(`${this.baseUrl}${endPoint}`)
        .pipe(
            shareReplay(),
            timeout(120000),
            retry(1)
        );
  }

  public add<T>(endPoint: string, itemToAdd: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endPoint}`, itemToAdd, httpOptions);
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
//Prevent browser caching
    req = req.clone({ headers: req.headers
      .set('Accept', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache')
      .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT')
      .set('If-Modified-Since', '0') 
  });
    return next.handle(req);
  }
}
