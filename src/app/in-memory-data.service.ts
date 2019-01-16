import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {ICaseManagement} from "./customer/models/case-management";
import {IQuickAccountAging, QuickAccountAging} from "./customer/models/quick-account-aging";
import {IInstallBase} from "./customer/models/install-base";
import {IPerson} from "./shared/models/person";
import {IQuotation} from "./shared/models/quotation";
import {ISalesOrder} from "./shared/models/sales-order";
import {IOrganization} from "./shared/models/organization";
import {Contact, IContact} from "./shared/models/contact";
//Json data files
import CaseManagementJson from "../assets/mockData/CaseManagement/CaseManagement.json";
import InstallBaseJson from "../assets/mockData/InstallBase/InstallBase.json";
import OrgDataJson from "../assets/mockData/Organization/Organization.json";
import OrderDataJson from "../assets/mockData/Order/Order.json";
import QuoteDataJson from "../assets/mockData/Quotation/Quotation.json";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    const quotes: IQuotation[] = QuoteDataJson.quotation as any[];
    const orders: ISalesOrder[] = OrderDataJson.orders as any[];
    const quickAccountAging: QuickAccountAging[] = this.getQuickAccountAging();
    const installBase: IInstallBase[] = InstallBaseJson.installBase as IInstallBase[];
    const organization: IOrganization[] = OrgDataJson.organization as IOrganization[];
    const contact: Contact[] = organization.map(o=> o.contacts) as any[];
    const caseManagement: ICaseManagement[] = CaseManagementJson.caseManagement as ICaseManagement[];
    return {quotes, orders, caseManagement, installBase, quickAccountAging, organization, contact};
  }

  genId<T extends  Contact | ICaseManagement | IInstallBase | IQuickAccountAging | IPerson>(myTable: T[]): number {
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
}


