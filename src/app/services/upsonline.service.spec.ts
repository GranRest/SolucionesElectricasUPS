import { TestBed } from '@angular/core/testing';

import { UpsonlineService } from './upsonline.service';

describe('UpsonlineService', () => {
  let service: UpsonlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpsonlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
