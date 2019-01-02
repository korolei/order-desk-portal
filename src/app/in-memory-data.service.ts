import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {ICaseManagement} from "./customer/models/case-management";
import {IQuickAccountAging, QuickAccountAging} from "./customer/models/quick-account-aging";
import {IInstallBase, InstallBase} from "./customer/models/install-base";
import {IPerson} from "./shared/models/person";
import {IQuotation} from "./shared/models/quotation";
import {ISalesOrder, SalesOrder} from "./shared/models/sales-order";
import {IOrganization} from "./shared/models/organization";
import {IContact} from "./shared/models/contact";
//Json data files
import CaseManagementJson from "../assets/mockData/CaseManagement/CaseManagement.json";
import OrgDataJson from "../assets/mockData/Organization/Organization.json";
import OrderJson from "../assets/order.json";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {

  }

  createDb() {
    const quotes: IQuotation[] = this.getQuotes();
    const orders: ISalesOrder[] = OrderJson.orders as ISalesOrder[];
    const quickAccountAging: QuickAccountAging[] = this.getQuickAccountAging();
    const installBase: InstallBase[] = this.getInstallBase();
    const organization: IOrganization[] = OrgDataJson.organization as IOrganization[];
    const caseManagement: ICaseManagement[] = CaseManagementJson.caseManagement as ICaseManagement[];
    return {quotes, orders, caseManagement, installBase, quickAccountAging, organization};
  }

  genId<T extends IQuotation | ISalesOrder | IContact | ICaseManagement | IInstallBase | IQuickAccountAging | IPerson>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
  //mock data functions

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
      // {
      //   id:1,
      //   quoteNumber: '200140821',
      //   creationDate: new Date('2018-10-21'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223341',
      //   deliveryAddress: '1 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-21'),
      //   plannedReceiptDate: new Date('2019-02-11'),
      //   postalAddress: '1 Main St.',
      //   quotationStatus: 'In Process',
      //   shiptoBP: '112231',
      //   shiptoBPName: 'ACME Inc.',
      //   soldtoBP: '223341',
      //   soldtoBPName: 'Fabrikam Ltd.',
      //   totalUSD: 2300.75,
      //   warn: false,
      //   owner: '',
      //   quotationLines: IOrderItem[]
      // },      {
      //   id:1,
      //   quoteNumber: '200140822',
      //   creationDate: new Date('2018-10-22'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223342',
      //   deliveryAddress: '2 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-22'),
      //   plannedReceiptDate: new Date('2019-02-12'),
      //   postalAddress: '2 Main St.',
      //   quotationStatus: 'Printed',
      //   shiptoBP: '112232',
      //   shiptoBPName: 'Fabrikam Ltd.',
      //   soldtoBP: '223342',
      //   soldtoBPName: 'ACME Inc.',
      //   totalUSD: 2300.22,
      //   warn: false,
      //   owner: '',
      //   quotationLines: IOrderItem[]
      // },      {
      //   id:1,
      //   quoteNumber: '200140823',
      //   creationDate: new Date('2018-10-23'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223343',
      //   deliveryAddress: '3 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-23'),
      //   plannedReceiptDate: new Date('2019-02-13'),
      //   postalAddress: '3 Main St.',
      //   quotationStatus: 'Internal Hold',
      //   shiptoBP: '112233',
      //   shiptoBPName: 'Fabrikam Ltd.',
      //   soldtoBP: '223343',
      //   soldtoBPName: 'ACME Inc.',
      //   totalUSD: 2300.33,
      //   warn: false,
      //   owner: '',
      //   quotationLines: IOrderItem[]
      // },      {
      //   id:1,
      //   quoteNumber: '200140824',
      //   creationDate: new Date('2018-10-24'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223344',
      //   deliveryAddress: '4 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-24'),
      //   plannedReceiptDate: new Date('2019-02-14'),
      //   postalAddress: '4 Main St.',
      //   quotationStatus: 'In Process',
      //   shiptoBP: '112234',
      //   shiptoBPName: 'ACME Inc.',
      //   soldtoBP: '223344',
      //   soldtoBPName: 'Fabrikam Ltd.',
      //   totalUSD: 2300.44,
      //   warn: false,
      //   owner: '',
      //   quotationLines: IOrderItem[]
      // },      {
      //   id:1,
      //   quoteNumber: '200140825',
      //   creationDate: new Date('2018-10-25'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223345',
      //   deliveryAddress: '5 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-25'),
      //   plannedReceiptDate: new Date('2019-02-15'),
      //   postalAddress: '5 Main St.',
      //   quotationStatus: 'Printed',
      //   shiptoBP: '112235',
      //   shiptoBPName: 'Fabrikam Ltd.',
      //   soldtoBP: '223345',
      //   soldtoBPName: 'ACME Inc.',
      //   totalUSD: 2300.55,
      //   warn: false,
      //   owner: '',
      //   quotationLines: IOrderItem[]
      // },      {
      //   id:6,
      //   quoteNumber: '200140826',
      //   creationDate: new Date('2018-10-26'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223346',
      //   deliveryAddress: '6 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-26'),
      //   plannedReceiptDate: new Date('2019-02-16'),
      //   postalAddress: '6 Main St.',
      //   quotationStatus: 'In Process',
      //   shiptoBP: '112236',
      //   shiptoBPName: 'ACME Inc.',
      //   soldtoBP: '223346',
      //   soldtoBPName: 'Fabrikam Ltd.',
      //   totalUSD: 4300.66,
      //   warn: false,
      //   owner: '',
      //   quotationLines: IOrderItem[]
      // }
    ] as IQuotation[];
  }

  private getOrders():ISalesOrder[] {
    return [
      // {
      //   id:1,
      //   quoteNumber: '200140821',
      //   creationDate: new Date('2018-10-21'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223341',
      //   deliveryAddress: '1 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-21'),
      //   plannedReceiptDate: new Date('2019-02-11'),
      //   postalAddress: '1 Main St.',
      //   quotationStatus: 'In Process',
      //   shiptoBP: '112231',
      //   shiptoBPName: 'ACME Inc.',
      //   soldtoBP: '223341',
      //   soldtoBPName: 'Fabrikam Ltd.',
      //   totalUSD: 2300.75,
      //   warn: true,
      //   quotationLines: []
      // },      {
      //   id:1,
      //   quoteNumber: '200140822',
      //   creationDate: new Date('2018-10-22'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223342',
      //   deliveryAddress: '2 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-22'),
      //   plannedReceiptDate: new Date('2019-02-12'),
      //   postalAddress: '2 Main St.',
      //   quotationStatus: 'Printed',
      //   shiptoBP: '112232',
      //   shiptoBPName: 'Fabrikam Ltd.',
      //   soldtoBP: '223342',
      //   soldtoBPName: 'ACME Inc.',
      //   totalUSD: 2300.22,
      //   warn: true,
      //   quotationLines: []
      // },      {
      //   id:1,
      //   quoteNumber: '200140823',
      //   creationDate: new Date('2018-10-23'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223343',
      //   deliveryAddress: '3 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-23'),
      //   plannedReceiptDate: new Date('2019-02-13'),
      //   postalAddress: '3 Main St.',
      //   quotationStatus: 'Internal Hold',
      //   shiptoBP: '112233',
      //   shiptoBPName: 'Fabrikam Ltd.',
      //   soldtoBP: '223343',
      //   soldtoBPName: 'ACME Inc.',
      //   totalUSD: 2300.33,
      //   warn: true,
      //   quotationLines: []
      // },      {
      //   id:1,
      //   quoteNumber: '200140824',
      //   creationDate: new Date('2018-10-24'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223344',
      //   deliveryAddress: '4 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-24'),
      //   plannedReceiptDate: new Date('2019-02-14'),
      //   postalAddress: '4 Main St.',
      //   quotationStatus: 'In Process',
      //   shiptoBP: '112234',
      //   shiptoBPName: 'ACME Inc.',
      //   soldtoBP: '223344',
      //   soldtoBPName: 'Fabrikam Ltd.',
      //   totalUSD: 2300.44,
      //   warn: true,
      //   quotationLines: []
      // },      {
      //   id:1,
      //   quoteNumber: '200140825',
      //   creationDate: new Date('2018-10-25'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223345',
      //   deliveryAddress: '5 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-25'),
      //   plannedReceiptDate: new Date('2019-02-15'),
      //   postalAddress: '5 Main St.',
      //   quotationStatus: 'Printed',
      //   shiptoBP: '112235',
      //   shiptoBPName: 'Fabrikam Ltd.',
      //   soldtoBP: '223345',
      //   soldtoBPName: 'ACME Inc.',
      //   totalUSD: 2300.55,
      //   warn: true,
      //   quotationLines: []
      // },      {
      //   id:6,
      //   quoteNumber: '200140826',
      //   creationDate: new Date('2018-10-26'),
      //   currencyCode: 'CAD',
      //   customerPO: '11223346',
      //   deliveryAddress: '6 Main St.',
      //   plannedDeliveryDate: new Date('2019-03-26'),
      //   plannedReceiptDate: new Date('2019-02-16'),
      //   postalAddress: '6 Main St.',
      //   quotationStatus: 'In Process',
      //   shiptoBP: '112236',
      //   shiptoBPName: 'ACME Inc.',
      //   soldtoBP: '223346',
      //   soldtoBPName: 'Fabrikam Ltd.',
      //   totalUSD: 4300.66,
      //   warn: true,
      //   quotationLines: []
      // }
    ] as ISalesOrder[];
  }
}


