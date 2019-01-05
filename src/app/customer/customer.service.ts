import {EventEmitter, Injectable} from '@angular/core';

export const VIEW_SCREENS = ['All','Quotations','Orders','Install Base','Case Management'];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public viewIndx = new EventEmitter<number>(false);
}
