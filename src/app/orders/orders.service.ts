import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/order.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  quotesApi = 'api/quotes';
  constructor(private http: HttpClient,private appService: AppService ) {}

  /** GET quotes from the server */
  getOrders (): Observable<Order[]> {
    return this.http.get<Order[]>(this.quotesApi)
      .pipe(
        tap(_ => this.appService.log('fetched quotes')),
        catchError(this.appService.handleError(this.quotesApi, []))
      );
  }
}
