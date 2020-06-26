import { TestBed } from '@angular/core/testing';

import { AllowedRoutesService } from './allowed-routes.service';

describe('AllowedRoutesService', () => {
  let service: AllowedRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowedRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
