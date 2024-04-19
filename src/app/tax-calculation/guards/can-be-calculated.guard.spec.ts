import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { canBeCalculatedGuard } from './can-be-calculated.guard';

describe('canBeCalculatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      canBeCalculatedGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  describe('canBeCalculatedGuard', () => {
    it('should return TRUE for any number more or equal 0', () => {
      expect(
        executeGuard(
          {
            params: { annualSalary: '10000' },
          } as unknown as ActivatedRouteSnapshot,
          {} as RouterStateSnapshot
        )
      ).toEqual(true);

      expect(
        executeGuard(
          {
            params: { annualSalary: '0' },
          } as unknown as ActivatedRouteSnapshot,
          {} as RouterStateSnapshot
        )
      ).toEqual(true);
    });

    it('should return FALSE for any other cases', () => {
      expect(
        executeGuard(
          {
            params: { annualSalary: '-1000' },
          } as unknown as ActivatedRouteSnapshot,
          {} as RouterStateSnapshot
        )
      ).not.toEqual(true);

      expect(
        executeGuard(
          {
            params: { annualSalary: '999STRING' },
          } as unknown as ActivatedRouteSnapshot,
          {} as RouterStateSnapshot
        )
      ).not.toEqual(true);
    });
  });
});
