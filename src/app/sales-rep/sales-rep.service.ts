import {EventEmitter, Injectable} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SalesAgent } from '../shared/models/sales-agent';

export const VIEW_SCREENS = ['All','Quotations','Orders'];

@Injectable(({
  providedIn: 'root'
}) as any)
export class SalesRepService {
  public viewIndex = new EventEmitter<number>(false);

  constructor(private authService: AuthService){}

  getUserData(): SalesAgent{
    return this.authService.getUserData();
  }
}
