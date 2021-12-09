import { TestBed } from '@angular/core/testing';

import { VerPaisService } from './ver-pais.service';

describe('VerPaisService', () => {
  let service: VerPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
