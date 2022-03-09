import { TestBed } from '@angular/core/testing';

import { AreLibComunicationsService } from './are-lib-comunications.service';

describe('AreLibComunicationsService', () => {
  let service: AreLibComunicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreLibComunicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
