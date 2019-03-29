import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrdersComponent } from './open-orders.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('OpenOrdersComponent', () => {
    let component: OpenOrdersComponent;
    let fixture: ComponentFixture<OpenOrdersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OpenOrdersComponent],
            imports:[SharedModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OpenOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});