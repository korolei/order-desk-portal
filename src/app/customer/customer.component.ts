import {Component, OnInit} from '@angular/core';
import {IInstallBase, InstallBase} from "./models/install-base";
import {CaseManagement, ICaseManagement} from "./models/case-management";
import {IQuickAccountAging, QuickAccountAging} from "./models/quick-account-aging";
import {ISalesOrder, SalesOrder} from "../shared/models/sales-order";
import {Person} from "../shared/models/person";
import {Address} from "../shared/models/address";
import {Organization} from "../shared/models/organization";
import {IQuotation, Quotation} from "../shared/models/quotation";
import {AppService} from "../app.service";
import {IPerson} from "../shared/interfaces/iperson";
import {IOrganization} from "../shared/interfaces/iorganization";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  customerId = 1;
  organizationId = 1;
  dataCount=0;
  customerData: Person;
  installBaseData: InstallBase[] = [];
  caseManagementData: CaseManagement[] = [];
  quickAccountAgingData: QuickAccountAging[] = [];
  quotationsData: Quotation[] = [];
  ordersData: SalesOrder[] = [];
  organizationData: Organization;
//TODO: move it to constants
  customerApi = 'api/person';
  organizationApi = 'api/organization';
  installBaseApi = 'api/installBase';
  quickAccountAgingApi = 'api/quickAccountAging';
  caseManagementApi = 'api/caseManagement';
  openQuotationsApi = 'api/quotes';
  openSalesOrderApi = 'api/orders';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.dataCount = 4;
    //customer data
    this.appService.getData<IPerson>(`${this.customerApi}/${this.customerId}`)
      .subscribe(data =>
        {
          this.customerData = new Person(data as IPerson);
          this.dataCount = this.dataCount + 1;
        });

    //organization data
    this.appService.getData<IOrganization>(`${this.organizationApi}/${this.organizationId}`)
      .subscribe(data => {
        this.organizationData = new Organization(data as IOrganization);
        this.dataCount = this.dataCount + 1;
      });


    //this.getData();
  }

  getData(){

    //quick account aging data
    this.appService.getData<IQuickAccountAging[]>(`${this.quickAccountAgingApi}`)
      .subscribe(data => {
        this.quickAccountAgingData = (data as IQuickAccountAging[])
        .map(item => new QuickAccountAging(item as IQuickAccountAging));
        this.dataCount = this.dataCount + 1;
      });


    //case management data
    this.appService.getData<ICaseManagement[]>(this.caseManagementApi)
      .subscribe(data => {
        this.caseManagementData = (data as ICaseManagement[])
        .map(item => new CaseManagement(item as ICaseManagement));
        this.dataCount = this.dataCount + 1;
      });

    // install base data
    this.appService.getData<IInstallBase[]>(this.installBaseApi)
      .subscribe(data => {this.installBaseData = (data as IInstallBase[])
        .map(item => new InstallBase(item as IInstallBase));
        this.dataCount = this.dataCount + 1;
      });

    //open quotation data
    this.appService.getData<IQuotation[]>(this.openQuotationsApi)
      .subscribe(data => {this.quotationsData = (data as IQuotation[])
        .map(item => new Quotation(item as IQuotation));
        this.dataCount = this.dataCount + 1;
      });

    //open sales orders
    this.appService.getData<ISalesOrder[]>(this.openSalesOrderApi)
      .subscribe(data => {this.ordersData = (data as ISalesOrder[])
        .map(item => new SalesOrder(item as ISalesOrder));
        this.dataCount = this.dataCount + 1;
      });
  }
}
