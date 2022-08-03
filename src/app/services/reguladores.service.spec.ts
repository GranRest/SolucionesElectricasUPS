import { TestBed } from '@angular/core/testing';

import { ReguladoresService } from './reguladores.service';

describe('ReguladoresService', () => {
  let service: ReguladoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReguladoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
