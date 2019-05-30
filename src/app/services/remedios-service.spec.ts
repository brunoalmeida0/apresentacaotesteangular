import { TestBed } from '@angular/core/testing';

import { RemediosService } from './remedios-service.service';

describe('RemediosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemediosService = TestBed.get(RemediosService);
    expect(service).toBeTruthy();
  });
});
