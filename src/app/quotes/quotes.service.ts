import { Injectable } from '@angular/core';
import { AppService } from "../app.service";
import { Quote } from '../shared/models/quote';
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotesApi = 'api/quotes';
  quoteApi = 'api/quote'
  constructor(private http: HttpClient, private appService: AppService ) {}

  /** GET quotes from the server */
  getQuotes (): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesApi)
      .pipe(
        tap(_ => this.appService.log('fetched quotes')),
        catchError(this.appService.handleError(this.quotesApi, []))
      );
  }
  // getQuote(): Observable<Quote> {
  //   return this.http.get<Quote>(this.quoteApi)
  //   .pipe(
  //     tap(_ => this.appService.log('fetched one quote')),
  //     catchError(this.appService.handleError(this.quoteApi, []))
  //   );
  // }
}
