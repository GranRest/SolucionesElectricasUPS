import { TestBed } from '@angular/core/testing';

import { CentrodatosService } from './centrodatos.service';

describe('CentrodatosService', () => {
  let service: CentrodatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrodatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
