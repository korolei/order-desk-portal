import {EventEmitter, Injectable} from '@angular/core';
import { SalesAgent } from '../shared/models/sales-agent';
import { AuthService } from '../auth/auth.service';

export const VIEW_SCREENS = ['All','Quotations','Orders'];

@Injectable(({
  providedIn: 'root'
}) as any)
export class CustomerService {

  public viewIndx = new EventEmitter<number>(false);
  constructor(private authService: AuthService){}
  
  getUserData(): SalesAgent{
    return this.authService.getUserData();
  }
}
