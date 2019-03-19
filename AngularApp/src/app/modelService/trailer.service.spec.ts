import { TestBed } from '@angular/core/testing';

import { TrailerService } from './trailer.service';

describe('TrailerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrailerService = TestBed.get(TrailerService);
    expect(service).toBeTruthy();
  });
});
