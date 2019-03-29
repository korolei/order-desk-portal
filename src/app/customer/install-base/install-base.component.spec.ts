import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallBaseComponent } from './install-base.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('InstallBaseComponent', () => {
    let component: InstallBaseComponent;
    let fixture: ComponentFixture<InstallBaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InstallBaseComponent],
            imports:[SharedModule,HttpClientModule],
            providers:[
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InstallBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});