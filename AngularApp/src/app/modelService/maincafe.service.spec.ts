import { TestBed } from '@angular/core/testing';

import { MaincafeService } from './maincafe.service';

describe('MaincafeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaincafeService = TestBed.get(MaincafeService);
    expect(service).toBeTruthy();
  });
});
