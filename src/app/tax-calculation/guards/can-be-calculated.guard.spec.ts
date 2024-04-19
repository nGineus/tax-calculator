import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canBeCalculatedGuard } from './can-be-calculated.guard';

describe('canBeCalculatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canBeCalculatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
