import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuotesComponent } from './all-quotes.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('AllQuotesComponent', () => {
    let component: AllQuotesComponent;
    let fixture: ComponentFixture<AllQuotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllQuotesComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllQuotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});