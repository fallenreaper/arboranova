import { TestBed } from '@angular/core/testing';

import { JaniceService } from './janice.service';

describe('JaniceService', () => {
  let service: JaniceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaniceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
