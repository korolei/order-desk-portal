import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from "@angular/common";

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [AppService,
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});