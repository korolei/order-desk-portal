import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerSearchComponent } from './customer-search.component';
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {AutocompleteComponent} from "../../core/autocomplete/autocomplete.component";

describe('CustomerSearchComponent', () => {
    let component: CustomerSearchComponent;
    let fixture: ComponentFixture<CustomerSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomerSearchComponent, AutocompleteComponent],
            imports:[MaterialModule,HttpClientModule,CommonModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});