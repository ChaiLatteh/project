import { TestBed, inject } from '@angular/core/testing';

import { LogregService } from './logreg.service';

describe('LogregService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogregService]
    });
  });

  it('should be created', inject([LogregService], (service: LogregService) => {
    expect(service).toBeTruthy();
  }));
});
