import { TestBed } from '@angular/core/testing';

import { AreLibI18nService } from './are-lib-i18n.service';

describe('AreLibI18nService', () => {
  let service: AreLibI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreLibI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
