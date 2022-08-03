import { TestBed } from '@angular/core/testing';

import { ElectrodosServiceService } from './electrodos.service.service';

describe('Electrodos.ServiceService', () => {
  let service: ElectrodosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectrodosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
