import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from "./core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes([]),
                SharedModule,BrowserAnimationsModule,
            MaterialModule, HttpClientModule, RouterModule],
            declarations: [AppComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should have a router outlet',()=>{
        let de = fixture.debugElement.query(By.directive(RouterOutlet));
        expect(de).not.toBeNull();
    })
});