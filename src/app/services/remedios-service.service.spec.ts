import { TestBed } from '@angular/core/testing';

import { RemediosServiceService } from './remedios-service.service';

describe('RemediosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemediosServiceService = TestBed.get(RemediosServiceService);
    expect(service).toBeTruthy();
  });
});
