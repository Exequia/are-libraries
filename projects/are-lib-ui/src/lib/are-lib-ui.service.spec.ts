import { TestBed } from '@angular/core/testing';

import { AreLibUiService } from './are-lib-ui.service';

describe('AreLibUiService', () => {
  let service: AreLibUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreLibUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
