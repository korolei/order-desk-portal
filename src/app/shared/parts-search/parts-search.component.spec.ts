import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartsSearchComponent } from './parts-search.component';
import {MaterialModule} from "../../core/material.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('PartsSearchComponent', () => {
    let component: PartsSearchComponent;
    let fixture: ComponentFixture<PartsSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PartsSearchComponent],
            imports:[MaterialModule,HttpClientModule,BrowserAnimationsModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PartsSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});