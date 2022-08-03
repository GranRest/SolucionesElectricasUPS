import { TestBed } from '@angular/core/testing';

import { MantenimientoupsService } from './mantenimientoups.service';

describe('MantenimientoupsService', () => {
  let service: MantenimientoupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
