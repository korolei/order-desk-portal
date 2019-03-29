import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesRegionsComponent } from './sales-regions.component';
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('SalesRegionsComponent', () => {
    let component: SalesRegionsComponent;
    let fixture: ComponentFixture<SalesRegionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SalesRegionsComponent],
            imports:[MaterialModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SalesRegionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});