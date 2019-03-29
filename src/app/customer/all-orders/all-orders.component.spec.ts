import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersComponent } from './all-orders.component';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";

describe('AllOrdersComponent', () => {
    let component: AllOrdersComponent;
    let fixture: ComponentFixture<AllOrdersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllOrdersComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
                ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});