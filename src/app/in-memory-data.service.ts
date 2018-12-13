import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {IOrder} from "./shared/interfaces/iorder";
import {IOrganization} from "./shared/interfaces/iorganization";
import {OrderStatus} from "./shared/enums/order-status.enum";
import {IQuote} from "./shared/interfaces/iquote";
import {ICustomer} from "./shared/interfaces/icustomer";
import {IItem} from "./shared/interfaces/iitem";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quotes: IQuote[] = [
      { id: 200273170,
        customer: {id:11,
          organization: {bp_name: "DevTech PET inc.", bp_number:95905} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.Printed],
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        items:[
          {id:10001}
          ] as IItem[]
      } as IQuote,
      { id: 200273171,
        customer: {id:12,
          organization: {bp_name: "Hunter Industries Inc.", bp_number:65392} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.Printed],
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        items:[
          {id:10001}
          ] as IItem[]
      } as IQuote,
      { id: 200273172,
        customer: {id:12,
          organization: {bp_name: "Hunter Industries Inc.", bp_number:65392} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.Printed],
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        items:[
          {id:10001}
          ] as IItem[]
      } as IQuote,
      { id: 200273173,
        customer: {id:11,
          organization: {bp_name: "DevTech PET inc.", bp_number:95905} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.Printed],
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        items:[
          {id:10001}
          ] as IItem[]
      } as IQuote,
      { id: 200273174,
        customer: {id:12,
          organization: {bp_name: "Hunter Industries Inc.", bp_number:65392} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.Modified],
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        warn: true,
        items:[
          {id:10001}
          ] as IItem[]
      } as IQuote,
    ];
    const orders = [
      { id: 200140823,
        customer: {id:12,
          organization: {bp_name: "Hunter Industries Inc.", bp_number:65392} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.CreditHold],
        warn: true,
        total: 89.12,
        deliverBy: new Date('2018-09-23'),
        items:[
          {id:10002}
        ] as IItem[]
      } as IOrder
    ];
    return {quotes, orders};
  }

  genId<T extends IQuote | IOrder>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}


