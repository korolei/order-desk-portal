import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IInstallBase, InstallBase} from "./models/install-base";
import {CaseManagement, ICaseManagement} from "./models/case-management";
import {QuickAccountAging, IQuickAccountAging} from "./models/quick-account-aging";
import {IOrganization, Organization} from "../shared/models/organization";
import {IQuotation, Quotation} from "../shared/models/quotation";
import {AppService} from "../app.service";
import {Contact, IContact} from "../shared/models/contact";
import { Location } from "../shared/models/location";
import {AppSettings} from "../core/app-settings";
import {CustomerService, VIEW_SCREENS} from "./customer.service";
import {ISalesOrder, SalesOrder} from "../shared/models/sales-order"
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, Observable} from "rxjs";
import {LinkTarget} from "../core/enums/link-target.enum";
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { QuickLink } from '../shared/models/quick-link';
import { MatAutocompleteTrigger } from '@angular/material';
import {CoreService} from "../core/services/core.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit, OnDestroy {
  orgId = -1;
  currentContactId = "";
  currentLocationId = -1;
  phoneNum = "";
  installBaseData: InstallBase[] = [];
  caseManagementData: CaseManagement[] = [];
  quickAccountAgingData: QuickAccountAging;
  quotationsData: Quotation[] = [];
  ordersData: SalesOrder[] = [];
  orgData: Organization = null;
  contacts: Contact[]=[];
  locations: Location[]=[];
  currentContact: Contact;
  currentLocation: Location;
  allViewScreens  = VIEW_SCREENS;
  currentView: string = VIEW_SCREENS[0];
  subscriptions: Subscription;
  filteredContacts: Observable<Contact[]>;
  contactControl = new FormControl();
  filteredLocations: Observable<Location[]>;
  locationControl = new FormControl();
  currentPhoneNum = "";
  
  //loading indicators
  contactsDataLoading: boolean;
  orgDataLoading: boolean;
  installBaseLoading:boolean;
  quickAccountAgingLoading:boolean;
  caseManagementLoading: boolean;
  quotationLoading: boolean;
  ordersLoading: boolean;

  @ViewChild(MatAutocompleteTrigger) contactsAutoComplete: MatAutocompleteTrigger;
  @ViewChild(MatAutocompleteTrigger) locationsAutoComplete: MatAutocompleteTrigger;
  
  constructor(private appService: AppService,
              private customerService: CustomerService,
              private coreService: CoreService,
              private route: ActivatedRoute,
              private router: Router
              ) {}

  ngOnInit() {
    this.subscriptions = this.customerService.viewIndx.subscribe((val: string | number) => this.currentView = this.allViewScreens[val]);
    this.subscriptions.add(this.appService.loadingSubject.subscribe(val=> this.cancelLoading(val)));
    this.appService.showCustomerSearch.next(true);
    
    //get by id
    this.subscriptions.add(this.appService.onCustomerFound.subscribe(
      (org: { id: number; bp_number: any; }) => {
        this.orgId = org.id  || 0;
        this.currentPhoneNum = "";
        this.coreService.setTitle(`BP#: ${org.bp_number}`);
        this.clearAllData();
        this.getCustomerData(`${AppSettings.organizationApi}/bp-number/${org.bp_number}`);
        this.getContactsData(`${AppSettings.contactApi}/${org.id}`);
      }));
    
    //get by phone #
    this.subscriptions.add(this.route.queryParamMap.subscribe(params => {
      const queryParams = {...params.keys, ...params} as any;
      if(queryParams.params[AppSettings.PhoneNumParam])
      {
        this.phoneNum = (queryParams.params[AppSettings.PhoneNumParam] as any) as string;
        if(this.phoneNum.length > 0){
          this.clearAllData();
          this.clearCurrentRoute();
          this.currentPhoneNum = this.phoneNum;
          this.coreService.setTitle(`Phone#: ${this.currentPhoneNum}`);
          this.getContactsData(`${AppSettings.contactApi}/phone/${this.phoneNum}`);
        }
      }
    }));

    this.filteredContacts = this.contactControl.valueChanges
    .pipe(
      startWith<string | Contact>(''),
      map(value => typeof value === 'string' ? value : value.toString()),
      map(name => name ? this._filterContacts(name) : this.contacts.slice())
    );

    this.filteredLocations = this.locationControl.valueChanges
      .pipe(
        startWith<string | Location>(''),
        map(value => typeof value === 'string' ? value : value.toString()),
        map(loc => loc ? this._filterLocations(loc) : this.locations.slice())
      );
  }

  getCustomerData(url: string){
    this.orgDataLoading=true;
    this.subscriptions.add(this.appService.getData<IOrganization>(url)
      .subscribe(data => {
        if(data !== null){
          this.orgData = new Organization(data as IOrganization);
          this.orgId = this.orgData.id;
          this.locations = this.orgData.locations.map(l=> new Location(l));
        }
        this.orgDataLoading=false;
      }));
  }

  getContactsData(url: string) {
    this.contactsDataLoading = true;
    this.subscriptions.add(this.appService.getData<IContact[]>(url)
      .subscribe(data => {
        this.contacts = (data as IContact[]).map(c=> new Contact(c));
          setTimeout(() => {
            if (this.currentPhoneNum.length > 0 && this.contacts.length > 0){
              this.contactsAutoComplete.openPanel();
            }
          }, 1000);
          this.contactsDataLoading = false;
      }));
  }

  setContact($event: { option: { value: Contact; }; }){
    const contact = $event.option.value as Contact;
    this.currentContact = this.contacts.find(c=> c.id === contact.id);
    this.currentContactId = this.currentContact.key;
    if(this.currentPhoneNum.length>0){
      this.getCustomerData(`${AppSettings.organizationApi}/bp-number/${this.currentContact.bpNumber}`);
    }
  }

  setLocation($event: { option: { value: Location; }; }) {
    const location = $event.option.value as Location;
    this.currentLocation = this.locations.find(l => l.id === location.id);
    this.currentLocationId = this.currentLocation.id;
    this.getData(this.currentLocationId);
  }

  getData(locationId: number){
    this.quickAccountAgingLoading = true;
    this.installBaseLoading = true;
    this.caseManagementLoading = true;
    this.ordersLoading = true;
    this.quotationLoading = true;
    
    //quick account aging data
    this.subscriptions.add(this.appService.getData<IQuickAccountAging>(`${AppSettings.quickAccountAgingApi}?bpNumber=${this.orgData.bp_number}`)
      .subscribe(data => {
        this.quickAccountAgingData = data ? new QuickAccountAging(data as IQuickAccountAging):null;
        this.quickAccountAgingLoading = false;
      }));

    //case management data
    this.subscriptions.add(this.appService.getData<ICaseManagement[]>(`${AppSettings.caseManagementApi}?bpNumber=${this.orgData.bp_number}`)
      .subscribe(data => {
        this.caseManagementData = data ? (data as ICaseManagement[]).map(item => new CaseManagement(item as ICaseManagement)) : [];
        this.caseManagementLoading = false;
      }));

    //install base data
    this.subscriptions.add(this.appService.getData<IInstallBase[]>(`${AppSettings.installBaseApi}/${this.orgData.bp_number}?locationId=${this.currentLocationId}`)
      .subscribe(data => {
        this.installBaseData = data ? (data as IInstallBase[]).map(item => new InstallBase(item as IInstallBase)) : [];
        this.installBaseLoading = false;
      }));

    //open quotation data
    this.subscriptions.add(this.appService.getData<IQuotation[]>(`${AppSettings.openQuotationsApi}?bpNumber=${this.orgData.bp_number}&locationId=${this.currentLocationId}`)
      .subscribe(data => {
        this.quotationsData = data ? (data as IQuotation[])
        .map(item => new Quotation(item as IQuotation)):[];
        this.quotationLoading = false;
      }));

    //open sales orders
    this.subscriptions.add(this.appService.getData<ISalesOrder[]>(`${AppSettings.openSalesOrdersApi}?bpNumber=${this.orgData.bp_number}&locationId=${this.currentLocationId}`)
      .subscribe(data => {
        this.ordersData = data ? (data as ISalesOrder[])
        .map(item => new SalesOrder(item as ISalesOrder)): [];
        this.ordersLoading = false;
      }));

      this.currentLocationId = locationId;
  }

  ngOnDestroy(): void {
    this.appService.showCustomerSearch.next(false);
    if(this.subscriptions)
    this.subscriptions.unsubscribe();
  }

  private clearAllData() {
    this.currentLocationId = 0;
    this.ordersData = [];
    this.installBaseData = [];
    this.quickAccountAgingData = null;
    this.caseManagementData = [];
    this.quotationsData = [];
    this.ordersData = [];
    this.contacts = [];
    this.locations = [];
    this.orgData = null;
    this.contactControl.setValue('');
    this.locationControl.setValue('');
    this.currentView = VIEW_SCREENS[0];
  }
  private clearLocation() {
    this.currentLocationId = 0;
    this.ordersData = [];
    this.installBaseData = [];
    this.quickAccountAgingData = null;
    this.caseManagementData = [];
    this.quotationsData = [];
    this.ordersData = [];
    this.currentView = VIEW_SCREENS[0];
    this.locationControl.setValue('');
  }
  private clearContact() {
    this.currentContactId = "";
    this.currentContact = null;
    this.contactControl.setValue('');
    if(this.phoneNum.length > 0){
        this.getContactsData(`${AppSettings.contactApi}/${this.orgId}`);
    }
  }
  private clearCurrentRoute() {
    const params = { ...this.route.queryParams };
    delete params[AppSettings.PhoneNumParam];
    this.router.navigate([]);
  }

  //for New Quote button
  isDisabled() {
    return !(this.currentLocationId > 0 && this.orgId > 0);
  }
  
  showNewQuoteForm(){
    if(!this.isDisabled) return;
    const userInfo = this.customerService.getUserData();
    const qLink = new QuickLink(LinkTarget.NewQuote, "", this.orgData.bp_number, this.orgData.bp_number, userInfo.employeeNumber, 
      this.currentLocationId, this.currentContactId);
    this.subscriptions.add(this.appService.add(AppSettings.quickLinksApi, qLink).subscribe());
  }
  
  displayLocationsFn(location?: Location): string | undefined {
    return location ? location.toString() : undefined;
  }

  displayContactsFn(user?: Contact): string | undefined {
    return user ? user.toString() : undefined;
  }

  _filterContacts(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.contacts.filter(option => option.toString().toLowerCase().includes(filterValue));
  }

  _filterLocations(loc: string): any[] {
    const filterValue = loc.toLowerCase();
    return this.locations.filter(option => option.toString().toLowerCase().includes(filterValue));
  }

  private cancelLoading(val: boolean) {
    if(!val){
      this.contactsDataLoading = val;
      this.orgDataLoading = val;      
    }
  }
}
