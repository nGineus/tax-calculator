import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaxCalculationResultPageComponent } from './pages/tax-calculation-result-page/tax-calculation-result-page.component';
import { TaxCalculationFormPageComponent } from './pages/tax-calculation-form-page/tax-calculation-form-page.component';
import { TaxRoutes } from './constants/tax-routes';
import { canBeCalculatedGuard } from './guards/can-be-calculated.guard';

const taxCalculationRoutes: Routes = [
  {
    path: TaxRoutes.HOME,
    component: TaxCalculationFormPageComponent,
  },
  {
    path: `${TaxRoutes.CALCULATION}/:annualSalary`,
    component: TaxCalculationResultPageComponent,
    canActivate: [canBeCalculatedGuard],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(taxCalculationRoutes)],
  exports: [RouterModule],
})
export class TaxCalculationRoutingModule {}
