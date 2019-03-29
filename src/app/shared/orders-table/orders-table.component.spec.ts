import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListComponent } from './orders-table.component';
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('OrdersTableComponent', () => {
    let component: OrderListComponent;
    let fixture: ComponentFixture<OrderListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderListComponent],
            imports:[MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});