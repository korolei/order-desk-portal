import {Component, OnDestroy, OnInit} from '@angular/core';
import {IInstallBase, InstallBase} from "./models/install-base";
import {CaseManagement, ICaseManagement} from "./models/case-management";
import {IQuickAccountAging, QuickAccountAging} from "./models/quick-account-aging";
import {ISalesOrder, SalesOrder} from "../shared/models/sales-order";
import {IOrganization, Organization} from "../shared/models/organization";
import {IQuotation, Quotation} from "../shared/models/quotation";
import {AppService} from "../app.service";
import {Address} from "../shared/models/address";
import {Contact} from "../shared/models/contact";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit, OnDestroy {
  orgId = 0;
  dataCount=0;
  maxCount = 6;
  installBaseData: InstallBase[] = [];
  caseManagementData: CaseManagement[] = [];
  quickAccountAgingData: QuickAccountAging[] = [];
  quotationsData: Quotation[] = [];
  ordersData: SalesOrder[] = [];
  organizationData: Organization;
  contacts: Contact[]=[];
  locations: Address[]=[];
  currentContact: Contact;
  currentLocationId = 0;

//TODO: move it to constants
  organizationApi = 'api/organization';
  installBaseApi = 'api/installBase';
  quickAccountAgingApi = 'api/quickAccountAging';
  caseManagementApi = 'api/caseManagement';
  openQuotationsApi = 'api/quotes';
  openSalesOrderApi = 'api/orders';

  constructor(private appService: AppService) { }

  ngOnInit() {
    if(this.orgId > 0){
      this.getOrganizationData(this.orgId)
    }
    this.appService.showCustomerSearch.next(true);
    this.appService.onCustomerFound.subscribe(
      id => {
        this.orgId = id;
        this.getOrganizationData(id);
    });
  }

  getOrganizationData(orgId: number){
    //organization data
    this.appService.getData<IOrganization>(`${this.organizationApi}/${orgId}`)
      .subscribe(data => {
        this.organizationData = new Organization(data as IOrganization);
        this.dataCount = this.organizationData !== undefined ? this.dataCount + 1 : this.dataCount=this.maxCount;
        this.contacts = this.organizationData.contacts;
        this.locations = this.contacts.map(c => c.address);
      });
  }
  setContact(addressId: number){
    this.currentContact = this.contacts.find(c=> c.address.id === addressId);
    this.currentLocationId = addressId;
    this.getData();
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

  ngOnDestroy(): void {
    this.appService.showCustomerSearch.next(false);
  }
}
