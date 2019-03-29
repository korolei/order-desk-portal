import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import {SharedModule} from "../../../shared/shared.module";
import {MaterialModule} from "../../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('OrdersComponent', () => {
    let component: OrdersComponent;
    let fixture: ComponentFixture<OrdersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrdersComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});