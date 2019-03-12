import { TestBed } from '@angular/core/testing';

import { DiningroomService } from './diningroom.service';

describe('DiningroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiningroomService = TestBed.get(DiningroomService);
    expect(service).toBeTruthy();
  });
});
