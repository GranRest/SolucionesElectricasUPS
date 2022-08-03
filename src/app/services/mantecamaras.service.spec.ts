import { TestBed } from '@angular/core/testing';

import { MantecamarasService } from './mantecamaras.service';

describe('MantecamarasService', () => {
  let service: MantecamarasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantecamarasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
