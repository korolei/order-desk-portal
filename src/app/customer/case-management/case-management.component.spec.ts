import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementComponent } from './case-management.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('CaseManagementComponent', () => {
    let component: CaseManagementComponent;
    let fixture: ComponentFixture<CaseManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CaseManagementComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CaseManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});