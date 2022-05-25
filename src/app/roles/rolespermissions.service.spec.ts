import { TestBed } from '@angular/core/testing';

import { RolespermissionsService } from './rolespermissions.service';

describe('RolespermissionsService', () => {
  let service: RolespermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolespermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
