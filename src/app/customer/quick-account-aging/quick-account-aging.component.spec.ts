import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccountAgingComponent } from './quick-account-aging.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {MaterialModule} from "../../core/material.module";

describe('QuickAccountAgingComponent', () => {
    let component: QuickAccountAgingComponent;
    let fixture: ComponentFixture<QuickAccountAgingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuickAccountAgingComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuickAccountAgingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});