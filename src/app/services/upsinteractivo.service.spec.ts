import { TestBed } from '@angular/core/testing';

import { UpsinteractivoService } from './upsinteractivo.service';

describe('UpsinteractivoService', () => {
  let service: UpsinteractivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpsinteractivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
