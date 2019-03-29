import { TestBed, inject } from '@angular/core/testing';
import { SalesRepService } from './sales-rep.service';
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('SalesRepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [SalesRepService,
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should be created', inject([SalesRepService], (service: SalesRepService) => {
    expect(service).toBeTruthy();
  }));
});