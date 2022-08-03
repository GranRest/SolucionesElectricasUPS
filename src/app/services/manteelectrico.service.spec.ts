import { TestBed } from '@angular/core/testing';

import { ManteelectricoService } from './manteelectrico.service';

describe('ManteelectricoService', () => {
  let service: ManteelectricoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManteelectricoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
