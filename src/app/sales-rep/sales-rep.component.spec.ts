import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepComponent } from './sales-rep.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {OrdersComponent} from "./orders/orders/orders.component";
import {QuotesComponent} from "./quotes/quotes/quotes.component";
import {AllOrdersComponent} from "./orders/all-orders/all-orders.component";
import {AllQuotesComponent} from "./quotes/all-quotes/all-quotes.component";

describe('SalesRepComponent', () => {
    let component: SalesRepComponent;
    let fixture: ComponentFixture<SalesRepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SalesRepComponent,
            OrdersComponent,
            QuotesComponent,
            AllOrdersComponent,
            AllQuotesComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule,
            ],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SalesRepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});