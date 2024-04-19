import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('apiService', [
      'getTaxConfig',
      'getTaxInfo',
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useValue: apiServiceSpy,
        },
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO Add tests after implementation
});
