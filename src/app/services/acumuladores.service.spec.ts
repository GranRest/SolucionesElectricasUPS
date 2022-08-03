import { TestBed } from '@angular/core/testing';

import { AcumuladoresService } from './acumuladores.service';

describe('AcumuladoresService', () => {
  let service: AcumuladoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcumuladoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
