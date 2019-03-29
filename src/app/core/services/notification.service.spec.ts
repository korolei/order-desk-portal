import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import {SharedModule} from "../../shared/shared.module";

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule],
      providers: [NotificationService]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});