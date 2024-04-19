import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaxRoutes } from '../../constants/tax-routes';

@Component({
  selector: 'app-tax-calculation-form-page',
  templateUrl: './tax-calculation-form-page.component.html',
  styleUrl: './tax-calculation-form-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxCalculationFormPageComponent {
  constructor(private readonly router: Router) {}

  calculateTaxes(value: number | null) {
    if (value) {
      this.router.navigate([TaxRoutes.CALCULATION, value]);
    }
  }
}
