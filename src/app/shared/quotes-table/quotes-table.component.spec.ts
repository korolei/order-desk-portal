import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteListComponent } from './quotes-table.component';
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('QuotesTableComponent', () => {
    let component: QuoteListComponent;
    let fixture: ComponentFixture<QuoteListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuoteListComponent],
            imports:[MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});