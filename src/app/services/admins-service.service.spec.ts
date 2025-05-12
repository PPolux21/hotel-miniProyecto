import { TestBed } from '@angular/core/testing';

import { AdminsServiceService } from './admins-service.service';

describe('AdminsServiceService', () => {
  let service: AdminsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
