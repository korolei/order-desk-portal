import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {IOrder} from "./shared/interfaces/iorder";
import {IOrganization} from "./shared/interfaces/iorganization";
import {IQuote} from "./shared/interfaces/iquote";
import {ICustomer} from "./shared/interfaces/icustomer";
import {CaseManagement} from "./customer/models/case-management";
import {Urgency} from "./shared/enums/urgency.enum";
import {QuickAccountAging} from "./customer/models/quick-account-aging";
import {AccountAgingTerm} from "./shared/enums/account-aging-term.enum";
import {InstallBase} from "./customer/models/install-base";
import {IAddress} from "./shared/interfaces/iaddress";
import {IPerson} from "./shared/interfaces/iperson";
import {Person} from "./shared/models/person";
//import {HttpClient} from "@angular/common/http";
import {IQuotation} from "./shared/models/quotation";
import {IOrderItem} from "./shared/models/order-item";
import {ISalesOrder} from "./shared/models/sales-order";
import {IContact} from "./shared/interfaces/icontact";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
    // this.getJSON('./assets/mockData/.json').subscribe(data => {
    //   console.log(data)
    // });
  }

  createDb() {
    const quotes: IQuotation[] = this.getQuotes();
    const orders: ISalesOrder[] = this.getOrders();
    const customers: ICustomer[] = this.getCustomers();
    const caseManagement: CaseManagement[] = this.getCaseManagement();
    const quickAccountAging: QuickAccountAging[] = this.getQuickAccountAging();
    const installBase: InstallBase[] = this.getInstallBase();
    const organization: IOrganization[] = this.getOrganization();
    const person: IPerson[] = this.getPersons();
    return {quotes, orders, customers, caseManagement, installBase, quickAccountAging, organization, person};
  }

  genId<T extends IQuote | IOrder | ICustomer | CaseManagement | InstallBase | QuickAccountAging | Person>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

  // public getJSON(url: string): Observable<any> {
  //   return this.http.get(url)
  // }

  //mock data functions
  private getCaseManagement(): CaseManagement[]{
    return [
      {id:1, customerId:1, ticketNumber: 200140823, urgency: Urgency[Urgency.Medium],
        dateOpened: new Date('2018-10-23'),
        status: 'Active'
      },
      {id:2, customerId:1, ticketNumber: 200140825, urgency: Urgency[Urgency.Low],
        dateOpened: new Date('2018-10-25'),
        status: 'Resolved',
        note: null
      },
      {id:3, customerId:1, ticketNumber: 200140823, urgency: Urgency[Urgency.High],
        dateOpened: new Date('2018-10-23'),
        status: 'Emergency',
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      },
      {id:4, customerId:1, ticketNumber: 200140825, urgency: Urgency[Urgency.Emergency],
        dateOpened: new Date('2018-10-25'),
        status: 'Active',
        note: null
      },
      {id:5, customerId:1, ticketNumber: 200140823, urgency: Urgency[Urgency.Medium],
        dateOpened: new Date('2018-10-23'),
        status: 'Active',
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      },
      {id:6, customerId:1, ticketNumber: 200140825, urgency: Urgency[Urgency.Medium],
        dateOpened: new Date('2018-10-23'),
        status: 'Active',
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      }
      ] as CaseManagement[];
  }

  private getQuickAccountAging(): QuickAccountAging[] {
    var one = AccountAgingTerm[AccountAgingTerm.Days60];
    return [
      {id: 1, agingTerm: 'Pending', amount: 0},
      {id: 2, agingTerm: '30 Days', amount: 275},
      {id: 3, agingTerm: '60 Days', amount: 300},
      {id: 4, agingTerm: '90 Days', amount: 200},
      {id: 5, agingTerm: '120 Days', amount: 100},
    ];
  }

  private getInstallBase():InstallBase[] {
    return [
      {id:1, customerId:1, dateInstalled: new Date('2018-10-23'), machineNumber: 200140823},
      {id:2, customerId:1, dateInstalled: new Date('2018-10-23'), machineNumber: 200140825},
      {id:3, customerId:1, dateInstalled: new Date('2018-10-23'), machineNumber: 200140823},
      {id:4, customerId:1, dateInstalled: new Date('2018-10-23'), machineNumber: 200140825},
      {id:5, customerId:1, dateInstalled: new Date('2018-10-23'), machineNumber: 200140823},
      {id:6, customerId:1, dateInstalled: new Date('2018-10-23'), machineNumber: 200140825}
    ] as InstallBase[];
  }

  private getQuotes():IQuotation[] {
    return [
      { id: 200273170,
          creationDate: new Date('2018-12-01'),
          currencyCode: 'CAD',
          customerPO: null,
          deliveryAddress:'',
          plannedDeliveryDate: new Date(),
          plannedReceiptDate: new Date(),
          postalAddress:'',
          postalCode:'',
          quotationStatus:'Pending',
          quotationLines:[],
          quoteNumber:'2233445',
          shiptoBP:'',
          shiptoBPName:'',
          soldtoBP:'',
          soldtoBPName:'',
          totalUSD: 2000.00,
          totalUSDSpecified: true,
        status: 'Printed',
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        items:[
          {id:10001}
        ] as IOrderItem[]
      } as IQuotation,
    ] as IQuotation[];
  }

  private getOrders():ISalesOrder[] {
    return [
      { id: 200140823,

      }
    ] as ISalesOrder[];
  }

  private getCustomers(): ICustomer[] {
    return [
      {id:1},
      {id:2}
    ] as ICustomer[];
  }

  private getOrganization(): IOrganization[] {
    return [
      {id:1, bp_name:'Husky IMS', bp_number:[112233],
        shipTo:'255 Queen St. S., L7E 5S5',
        contacts:[{id:1, firstName:'Joe', lastName:'Doe', email:'jdoe@husky.ca',
          phones:[{id:1,areaCode:'222', countryCode:'+1', localNumber:'233-456-7890', extension:'', type:'Office'}],
          address:{id:1, city:'Bolton', country:'Canada', state:'ON', street:'255 Queen St. S.', zip:'L7E 5S5'} as IAddress} as IContact]
  }];
}

  private getPersons(): IPerson[] {
    return [
      {id:1, title:'Factory Manager', firstName:'Joe', lastName:'Doe', email:'jdoe@husky.ca', phone:{id:1,areaCode:'222', countryCode:'+1', localNumber:'233-456-7890', extension:'', type:'Office'}},
      {id:2, title:'Sales Rep', firstName:'Linda', lastName:'Olsen', email:'', phone:{id:1,areaCode:'222', countryCode:'+1', localNumber:'233-456-7890', extension:'', type:'Office'}},
      {id:3, title:'Manager', firstName:'Joe', lastName:'Doe', email:'', phone:{id:1,areaCode:'222', countryCode:'+1', localNumber:'233-456-7890', extension:'', type:'Office'}},
    ];
  }
}


