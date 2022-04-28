import { TestBed } from '@angular/core/testing';

import { DirectiveIfService } from './directive-if.service';

describe('DirectiveIfService', () => {
  let service: DirectiveIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectiveIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
