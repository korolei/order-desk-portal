import {EventEmitter, Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {MessageService} from "./shared/services/message.service";
import {catchError} from "rxjs/operators";
import {APP_BASE_HREF} from "@angular/common";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public baseUrl: string;

  public showCustomerSearch =  new EventEmitter<boolean>();
  public onCustomerFound: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Optional() @Inject(APP_BASE_HREF) baseHref: string) {
      this.baseUrl = baseHref;
  }

  public getData<T>(endPoint: string): Observable<T> {
    let data =this.http.get<T>(`${endPoint}`)
      .pipe(
        catchError(this.handleError(endPoint, null))
      );
    return data;
  }

  public add<T>(endPoint: string, itemToAdd: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endPoint}`, itemToAdd, httpOptions)
      .pipe(
        catchError(this.handleError(endPoint, null))
      );
  }

  public update<T>(endPoint: string, id: number, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}/${endPoint}/${id}`, itemToUpdate, httpOptions);
  }

  public delete<T>(endPoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endPoint}/${id}`, httpOptions);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  log(message: string) {
    this.messageService.add(`Order Desk Service: ${message}`);
  }

   flatten (obj) {
    const newObj = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        const temp = this.flatten(obj[key])
        for (const key2 in temp) {
          newObj[key+"_"+key2] = temp[key2];
        }
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  }
}
