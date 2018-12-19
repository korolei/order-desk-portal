import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Observable} from 'rxjs';
import {SalesOrder} from '../shared/models/sales-order';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersApi = 'api/orders';
  constructor(private http: HttpClient,private appService: AppService ) {}

  /** GET orders from the server */
  getOrders (): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(this.ordersApi)
      .pipe(
        tap(_ => this.appService.log('fetched orders')),
        catchError(this.appService.handleError(this.ordersApi, []))
      );
  }
}
