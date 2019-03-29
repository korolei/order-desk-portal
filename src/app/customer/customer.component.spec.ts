import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';
import {MaterialModule} from "../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {InstallBaseComponent} from "./install-base/install-base.component";
import {QuickAccountAgingComponent} from "./quick-account-aging/quick-account-aging.component";
import {CaseManagementComponent} from "./case-management/case-management.component";
import {OpenQuotesComponent} from "./open-quotes/open-quotes.component";
import {OpenOrdersComponent} from "./open-orders/open-orders.component";
import {AllOrdersComponent} from "./all-orders/all-orders.component";
import {AllQuotesComponent} from "./all-quotes/all-quotes.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AutocompleteComponent} from "../core/autocomplete/autocomplete.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {QuoteListComponent} from "../shared/quotes-table/quotes-table.component";
import {OrderListComponent} from "../shared/orders-table/orders-table.component";
import {By} from "@angular/platform-browser";
import {AppService} from "../app.service";
import {CustomerService} from "./customer.service";
import {CoreService} from "../core/services/core.service";
import {ActivatedRoute, Router} from "@angular/router";

describe('CustomerComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CustomerComponent,
                InstallBaseComponent,
                QuickAccountAgingComponent,
                CaseManagementComponent,
                OpenQuotesComponent,
                OpenOrdersComponent,
                AllOrdersComponent,
                AllQuotesComponent,
                AutocompleteComponent,
                QuoteListComponent,
                OrderListComponent
                ],
            imports:[MaterialModule,HttpClientModule,RouterTestingModule,FlexLayoutModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
    }));

    describe('tests:', () => {
        function setup() {
            const fixture = TestBed.createComponent(CustomerComponent);

            const component = fixture.componentInstance;
            const appService = fixture.debugElement.injector.get(AppService);
            const customerService = fixture.debugElement.injector.get(CustomerService);
            const coreService = fixture.debugElement.injector.get(CoreService);
            const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
            const router = fixture.debugElement.injector.get(Router);

            return {fixture, component, appService,customerService,coreService,activatedRoute, router};
        }

        it('should create', () => {
            const {component} = setup();
            expect(component).toBeTruthy();
        });
    })
});