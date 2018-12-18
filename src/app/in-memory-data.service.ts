import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {IOrder} from "./shared/interfaces/iorder";
import {IOrganization} from "./shared/interfaces/iorganization";
import {OrderStatus} from "./shared/enums/order-status.enum";
import {IQuote} from "./shared/interfaces/iquote";
import {ICustomer} from "./shared/interfaces/icustomer";
import {IItem} from "./shared/interfaces/iitem";
import {CaseManagement} from "./customer/models/case-management";
import {Urgency} from "./shared/enums/urgency.enum";
import {CaseManagementStatus} from "./shared/enums/case-management-status.enum";
import {QuickAccountAging} from "./customer/models/quick-account-aging";
import {AccountAgingTerm} from "./shared/enums/account-aging-term.enum";
import {InstallBase} from "./customer/models/install-base";
import {IAddress} from "./shared/interfaces/iaddress";
import {IPerson} from "./shared/interfaces/iperson";
import {Person} from "./shared/models/person";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const quotes: IQuote[] = this.getQuotes();
    const orders: IOrder[] = this.getOrders();
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

  //mock data functions
  private getCaseManagement(): CaseManagement[]{
    return [
      {id:1, customerId:1, ticketNumber: 200140823, urgency: Urgency[Urgency.Medium],
        dateOpened: new Date('2018-10-23'),
        status: CaseManagement[CaseManagementStatus.Active],
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      },
      {id:2, customerId:1, ticketNumber: 200140825, urgency: Urgency[Urgency.Low],
        dateOpened: new Date('2018-10-25'),
        status: CaseManagement[CaseManagementStatus.Resolved],
        note: null
      },
      {id:3, customerId:1, ticketNumber: 200140823, urgency: Urgency[Urgency.High],
        dateOpened: new Date('2018-10-23'),
        status: CaseManagement[CaseManagementStatus.Emergency],
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      },
      {id:4, customerId:1, ticketNumber: 200140825, urgency: Urgency[Urgency.Emergency],
        dateOpened: new Date('2018-10-25'),
        status: CaseManagement[CaseManagementStatus.Active],
        note: null
      },
      {id:5, customerId:1, ticketNumber: 200140823, urgency: Urgency[Urgency.Medium],
        dateOpened: new Date('2018-10-23'),
        status: CaseManagement[CaseManagementStatus.Active],
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      },
      {id:6, customerId:1, ticketNumber: 200140825, urgency: Urgency[Urgency.Medium],
        dateOpened: new Date('2018-10-23'),
        status: CaseManagement[CaseManagementStatus.Active],
        note: {id: 1, noteType: 'NoteType', noteText: 'Some Text'}
      }
      ] as CaseManagement[];
  }

  private getQuickAccountAging(): QuickAccountAging[] {
    var one = AccountAgingTerm[AccountAgingTerm.Days60];
    return [
      {id: 1, agingTerm: AccountAgingTerm[AccountAgingTerm.Pending], amount:0},
      {id: 2, agingTerm: AccountAgingTerm[AccountAgingTerm.Pending], amount:275},
      {id: 3, agingTerm: AccountAgingTerm[AccountAgingTerm.Pending], amount:300},
      {id: 4, agingTerm: AccountAgingTerm[AccountAgingTerm.Pending], amount:200},
      {id: 5, agingTerm: AccountAgingTerm[AccountAgingTerm.Pending], amount:100},
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

  private getQuotes():IQuote[] {
    return [
      { id: 200273170,
        customer: {id:1,
          organization: {bp_name: "DevTech PET inc.", bp_number:95905} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.Printed],
        total: 856.70,
        quotedOn: new Date('2018-11-13'),
        items:[
          {id:10001}
        ] as IItem[]
      } as IQuote,
    ] as IQuote[];
  }

  private getOrders():IOrder[] {
    return [
      { id: 200140823,
        customer: {id:1,
          organization: {bp_name: "Hunter Industries Inc.", bp_number:65392} as IOrganization} as ICustomer,
        status: OrderStatus[OrderStatus.InProcess],
        total: 89.12,
        orderedOn: new Date('2018-09-23'),
        items:[
          {id:10002}
        ] as IItem[]
      }
    ] as IOrder[];
  }

  private getCustomers(): ICustomer[] {
    return [
      {id:1, organization: {bp_name: "DevTech PET inc.", bp_number:95905} as IOrganization},
      {id:2, organization: {bp_name: "Hunter Industries Inc.", bp_number:65392} as IOrganization}
    ] as ICustomer[];
  }

  private getOrganization(): IOrganization[] {
    return [
      {id:1, bp_name:'Husky IMS', bp_number:112233,
        shipTo:{id:2, city:'London', country:'Canada', state:'ON', street:'255 Queen St. S.', zip:'L7E 5S5'} as IAddress,
        address:{id:1, city:'Bolton', country:'Canada', state:'ON', street:'255 Queen St. S.', zip:'L7E 5S5'} as IAddress,
        contact:{id:1, firstName:'Joe', lastName:'Doe', email:'jdoe@husky.ca' } as IPerson,
          phones:[{areaCode:'222', countryCode:'+1', localNumber:'233-456-7890', extension:'', type:'Office'}]
  }];
}

  private getPersons(): IPerson[] {
    return [
      {id:1, title:'Factory Manager', firstName:'Joe', lastName:'Doe'},
      {id:2, title:'Sales Rep', firstName:'Linda', lastName:'Olsen'},
      {id:3, title:'Manager', firstName:'Joe', lastName:'Doe'},
    ];
  }
}


