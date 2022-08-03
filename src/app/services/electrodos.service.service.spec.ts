import { TestBed } from '@angular/core/testing';

import { Electrodos.ServiceService } from './electrodos.service.service';

describe('Electrodos.ServiceService', () => {
  let service: Electrodos.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Electrodos.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
