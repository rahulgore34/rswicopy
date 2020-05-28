import { TestBed } from '@angular/core/testing';

import { RegisterdataService } from './registerdata.service';

describe('RegisterdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterdataService = TestBed.get(RegisterdataService);
    expect(service).toBeTruthy();
  });
});
