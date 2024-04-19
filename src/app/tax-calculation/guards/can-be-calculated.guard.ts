import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TaxRoutes } from '../constants/tax-routes';

export const canBeCalculatedGuard: CanActivateFn = route => {
  const router = inject(Router);
  const annualSalary = Number(route.params['annualSalary']);
  return !Number.isNaN(annualSalary) && annualSalary >= 0
    ? true
    : router.navigate([TaxRoutes.HOME]);
};
