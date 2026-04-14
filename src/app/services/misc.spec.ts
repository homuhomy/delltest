import { TestBed } from '@angular/core/testing';

import { Misc } from './misc';

describe('Misc', () => {
  let service: Misc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Misc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
