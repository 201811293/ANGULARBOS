import { TestBed } from '@angular/core/testing';

import { EgresadoService } from './EgresadoService';

describe('EgresadoService', () => {
  let service: EgresadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgresadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
