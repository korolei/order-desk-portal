import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenQuotesComponent } from './open-quotes.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('OpenQuotesComponent', () => {
    let component: OpenQuotesComponent;
    let fixture: ComponentFixture<OpenQuotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OpenQuotesComponent],
            imports:[SharedModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OpenQuotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});