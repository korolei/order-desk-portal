import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {SalesAgent} from "../shared/models/sales-agent";
import {By} from "@angular/platform-browser";
import {MatGridListModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule} from "@angular/material";
import {Router, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {RouterTestingModule} from "@angular/router/testing";
import {DebugElement} from "@angular/core";
import Spy = jasmine.Spy;
import {SpyObject} from "@angular/core/testing/src/testing_internal";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let service: AuthService;
    let fixture: ComponentFixture<HomeComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
                MatToolbarModule,
                MatGridListModule,
                MatCardModule,
                MatProgressSpinnerModule,
                RouterModule,
                HttpClientModule,
                RouterTestingModule
            ],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        service = debugElement.injector.get(AuthService);
        
        fixture.detectChanges();
    });

    it('should create HomeComponent', () => {
        expect(component).toBeTruthy();
    });
    
    it('should render user first name',()=>{
        const user = {firstName:'Test'} as SalesAgent;
        let spy = spyOn(service,'getUserData').and.returnValue(user);
        expect(spy).toHaveBeenCalled();
        component.isLoading = false;
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('sub-header'));
        let el: HTMLElement = de.nativeElement;

        expect(el.innerText).toContain('Test');
    })
});