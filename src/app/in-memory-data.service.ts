import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {ICaseManagement} from "./customer/models/case-management";
import { QuickAccountAging} from "./customer/models/quick-account-aging";
import {IInstallBase} from "./customer/models/install-base";
import {IPerson} from "./shared/models/person";
import {IQuotation} from "./shared/models/quotation";
import {ISalesOrder} from "./shared/models/sales-order";
import {IOrganization} from "./shared/models/organization";
import {IContact} from "./shared/models/contact";
//Json data files
import CaseManagementJson from "../assets/mockData/CaseManagement/CaseManagement.json";
import InstallBaseJson from "../assets/mockData/InstallBase/InstallBase.json";
import OrgDataJson from "../assets/mockData/Organization/Organization.json";
import OrderDataJson from "../assets/mockData/Order/Order.json";
import QuoteDataJson from "../assets/mockData/Quotation/Quotation.json";
import ConfigJson from "../assets/config.json";
import {RuntimeConfig} from "runtime-config-loader";
import {ISalesRegion} from "./shared/models/sales-region";

@Injectable(({
  providedIn: 'root',
}) as any)
export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    throw new Error("Method not implemented.");
  }
  contacts: IContact[]=[];
  constructor() {}

  // createDb() {
  //   const quote: IQuotation[] = QuoteDataJson.quotation as any[];
  //   const order: ISalesOrder[] = OrderDataJson.orders as any[];
  //   const quickAccountAging: QuickAccountAging[] = this.getQuickAccountAging();
  //   const installBase: IInstallBase[] = InstallBaseJson.installBase as IInstallBase[];
  //   const customer: IOrganization[] = OrgDataJson.organization as IOrganization[];
  //   const caseManagement: ICaseManagement[] = CaseManagementJson.caseManagement as ICaseManagement[];
  //   const config: RuntimeConfig = ConfigJson as RuntimeConfig;
  //   const salesOffice: ISalesRegion[] = this.getSalesRegions()
  //   return {quote, order, caseManagement, installBase, quickAccountAging, customer, config, salesOffice};
  // }

  // genId<T extends  ICaseManagement | IInstallBase | IQuickAccountAging | IPerson | IOrganization |
  //    IQuotation | ISalesOrder>(myTable: T[]): number {
  //   return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  // }
  //mock data functions

  // private getQuickAccountAging(): QuickAccountAging[] {
  //   return [
  //     {id: 1, agingTerm: 'Pending', amount: 0, currencyCode:'CAD'},
  //     {id: 2, agingTerm: '30 Days', amount: 275.05, currencyCode:'CAD'},
  //     {id: 3, agingTerm: '60 Days', amount: 300.99, currencyCode:'CAD'},
  //     {id: 4, agingTerm: '90 Days', amount: 200, currencyCode:'CAD'},
  //     {id: 5, agingTerm: '120 Days', amount: 100, currencyCode:'CAD'}
  //   ];
  // }

  private getSalesRegions(): ISalesRegion[] {
    return [
      {name: 'NA', description:'North America'},
      {name: 'SA', description:'South America'},
      {name: 'EU', description:'Europe'},
      {name: 'AS', description:'Asia'}
    ];
  }
}


