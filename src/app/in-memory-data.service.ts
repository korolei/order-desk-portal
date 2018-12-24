import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {IOrder} from "./shared/interfaces/iorder";
import {IOrganization} from "./shared/interfaces/iorganization";
import {IQuote} from "./shared/interfaces/iquote";
import {ICustomer} from "./shared/interfaces/icustomer";
import {CaseManagement, ICaseManagement} from "./customer/models/case-management";
import {Urgency} from "./shared/enums/urgency.enum";
import {QuickAccountAging} from "./customer/models/quick-account-aging";
import {InstallBase} from "./customer/models/install-base";
import {IAddress} from "./shared/interfaces/iaddress";
import {IPerson} from "./shared/interfaces/iperson";
import {Person} from "./shared/models/person";
import {IQuotation} from "./shared/models/quotation";
import {ISalesOrder} from "./shared/models/sales-order";
import {IContact} from "./shared/interfaces/icontact";
import CaseManagementJson from "../assets/mockData/CaseManagement.json";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {

  }

  createDb() {
    const quotes: IQuotation[] = this.getQuotes();
    const orders: ISalesOrder[] = this.getOrders();
    const customers: ICustomer[] = this.getCustomers();
    const quickAccountAging: QuickAccountAging[] = this.getQuickAccountAging();
    const installBase: InstallBase[] = this.getInstallBase();
    const organization: IOrganization[] = this.getOrganization();
    const person: IPerson[] = this.getPersons();
    const caseManagement: ICaseManagement[] = CaseManagementJson.caseManagement as ICaseManagement[];
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
    return [
      {id: 1, agingTerm: 'Pending', amount: 0, currencyCode:'CAD'},
      {id: 2, agingTerm: '30 Days', amount: 275.05, currencyCode:'CAD'},
      {id: 3, agingTerm: '60 Days', amount: 300.99, currencyCode:'CAD'},
      {id: 4, agingTerm: '90 Days', amount: 200, currencyCode:'CAD'},
      {id: 5, agingTerm: '120 Days', amount: 100, currencyCode:'CAD'}
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
      {
        id:1,
        quoteNumber: '200140821',
        creationDate: new Date('2018-10-21'),
        currencyCode: 'CAD',
        customerPO: '11223341',
        deliveryAddress: '1 Main St.',
        plannedDeliveryDate: new Date('2019-03-21'),
        plannedReceiptDate: new Date('2019-02-11'),
        postalAddress: '1 Main St.',
        quotationStatus: 'In Process',
        shiptoBP: '112231',
        shiptoBPName: 'ACME Inc.',
        soldtoBP: '223341',
        soldtoBPName: 'Fabrikam Ltd.',
        totalUSD: 2300.75,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140822',
        creationDate: new Date('2018-10-22'),
        currencyCode: 'CAD',
        customerPO: '11223342',
        deliveryAddress: '2 Main St.',
        plannedDeliveryDate: new Date('2019-03-22'),
        plannedReceiptDate: new Date('2019-02-12'),
        postalAddress: '2 Main St.',
        quotationStatus: 'Printed',
        shiptoBP: '112232',
        shiptoBPName: 'Fabrikam Ltd.',
        soldtoBP: '223342',
        soldtoBPName: 'ACME Inc.',
        totalUSD: 2300.22,
        totalUSDSpecified: false,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140823',
        creationDate: new Date('2018-10-23'),
        currencyCode: 'CAD',
        customerPO: '11223343',
        deliveryAddress: '3 Main St.',
        plannedDeliveryDate: new Date('2019-03-23'),
        plannedReceiptDate: new Date('2019-02-13'),
        postalAddress: '3 Main St.',
        quotationStatus: 'Internal Hold',
        shiptoBP: '112233',
        shiptoBPName: 'Fabrikam Ltd.',
        soldtoBP: '223343',
        soldtoBPName: 'ACME Inc.',
        totalUSD: 2300.33,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140824',
        creationDate: new Date('2018-10-24'),
        currencyCode: 'CAD',
        customerPO: '11223344',
        deliveryAddress: '4 Main St.',
        plannedDeliveryDate: new Date('2019-03-24'),
        plannedReceiptDate: new Date('2019-02-14'),
        postalAddress: '4 Main St.',
        quotationStatus: 'In Process',
        shiptoBP: '112234',
        shiptoBPName: 'ACME Inc.',
        soldtoBP: '223344',
        soldtoBPName: 'Fabrikam Ltd.',
        totalUSD: 2300.44,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140825',
        creationDate: new Date('2018-10-25'),
        currencyCode: 'CAD',
        customerPO: '11223345',
        deliveryAddress: '5 Main St.',
        plannedDeliveryDate: new Date('2019-03-25'),
        plannedReceiptDate: new Date('2019-02-15'),
        postalAddress: '5 Main St.',
        quotationStatus: 'Printed',
        shiptoBP: '112235',
        shiptoBPName: 'Fabrikam Ltd.',
        soldtoBP: '223345',
        soldtoBPName: 'ACME Inc.',
        totalUSD: 2300.55,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:6,
        quoteNumber: '200140826',
        creationDate: new Date('2018-10-26'),
        currencyCode: 'CAD',
        customerPO: '11223346',
        deliveryAddress: '6 Main St.',
        plannedDeliveryDate: new Date('2019-03-26'),
        plannedReceiptDate: new Date('2019-02-16'),
        postalAddress: '6 Main St.',
        quotationStatus: 'In Process',
        shiptoBP: '112236',
        shiptoBPName: 'ACME Inc.',
        soldtoBP: '223346',
        soldtoBPName: 'Fabrikam Ltd.',
        totalUSD: 4300.66,
        totalUSDSpecified: true,
        quotationLines: []
      }
    ] as IQuotation[];
  }

  private getOrders():ISalesOrder[] {
    return [
      {
        id:1,
        quoteNumber: '200140821',
        creationDate: new Date('2018-10-21'),
        currencyCode: 'CAD',
        customerPO: '11223341',
        deliveryAddress: '1 Main St.',
        plannedDeliveryDate: new Date('2019-03-21'),
        plannedReceiptDate: new Date('2019-02-11'),
        postalAddress: '1 Main St.',
        quotationStatus: 'In Process',
        shiptoBP: '112231',
        shiptoBPName: 'ACME Inc.',
        soldtoBP: '223341',
        soldtoBPName: 'Fabrikam Ltd.',
        totalUSD: 2300.75,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140822',
        creationDate: new Date('2018-10-22'),
        currencyCode: 'CAD',
        customerPO: '11223342',
        deliveryAddress: '2 Main St.',
        plannedDeliveryDate: new Date('2019-03-22'),
        plannedReceiptDate: new Date('2019-02-12'),
        postalAddress: '2 Main St.',
        quotationStatus: 'Printed',
        shiptoBP: '112232',
        shiptoBPName: 'Fabrikam Ltd.',
        soldtoBP: '223342',
        soldtoBPName: 'ACME Inc.',
        totalUSD: 2300.22,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140823',
        creationDate: new Date('2018-10-23'),
        currencyCode: 'CAD',
        customerPO: '11223343',
        deliveryAddress: '3 Main St.',
        plannedDeliveryDate: new Date('2019-03-23'),
        plannedReceiptDate: new Date('2019-02-13'),
        postalAddress: '3 Main St.',
        quotationStatus: 'Internal Hold',
        shiptoBP: '112233',
        shiptoBPName: 'Fabrikam Ltd.',
        soldtoBP: '223343',
        soldtoBPName: 'ACME Inc.',
        totalUSD: 2300.33,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140824',
        creationDate: new Date('2018-10-24'),
        currencyCode: 'CAD',
        customerPO: '11223344',
        deliveryAddress: '4 Main St.',
        plannedDeliveryDate: new Date('2019-03-24'),
        plannedReceiptDate: new Date('2019-02-14'),
        postalAddress: '4 Main St.',
        quotationStatus: 'In Process',
        shiptoBP: '112234',
        shiptoBPName: 'ACME Inc.',
        soldtoBP: '223344',
        soldtoBPName: 'Fabrikam Ltd.',
        totalUSD: 2300.44,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:1,
        quoteNumber: '200140825',
        creationDate: new Date('2018-10-25'),
        currencyCode: 'CAD',
        customerPO: '11223345',
        deliveryAddress: '5 Main St.',
        plannedDeliveryDate: new Date('2019-03-25'),
        plannedReceiptDate: new Date('2019-02-15'),
        postalAddress: '5 Main St.',
        quotationStatus: 'Printed',
        shiptoBP: '112235',
        shiptoBPName: 'Fabrikam Ltd.',
        soldtoBP: '223345',
        soldtoBPName: 'ACME Inc.',
        totalUSD: 2300.55,
        totalUSDSpecified: true,
        quotationLines: []
      },      {
        id:6,
        quoteNumber: '200140826',
        creationDate: new Date('2018-10-26'),
        currencyCode: 'CAD',
        customerPO: '11223346',
        deliveryAddress: '6 Main St.',
        plannedDeliveryDate: new Date('2019-03-26'),
        plannedReceiptDate: new Date('2019-02-16'),
        postalAddress: '6 Main St.',
        quotationStatus: 'In Process',
        shiptoBP: '112236',
        shiptoBPName: 'ACME Inc.',
        soldtoBP: '223346',
        soldtoBPName: 'Fabrikam Ltd.',
        totalUSD: 4300.66,
        totalUSDSpecified: true,
        quotationLines: []
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


