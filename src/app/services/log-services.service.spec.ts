import { TestBed } from '@angular/core/testing';

import { LogServicesService } from './log-services.service';

describe('LogServicesService', () => {
  let service: LogServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
