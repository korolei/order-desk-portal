import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesComponent } from './quotes.component';
import {SharedModule} from "../../../shared/shared.module";
import {MaterialModule} from "../../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('QuotesComponent', () => {
    let component: QuotesComponent;
    let fixture: ComponentFixture<QuotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuotesComponent],
            imports:[SharedModule,MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});