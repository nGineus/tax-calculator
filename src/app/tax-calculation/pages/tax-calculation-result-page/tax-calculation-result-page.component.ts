import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaxInfo } from '../../interfaces/tax-info';
import { ApiService } from '../../services/api.service';
import { Observable, switchMap, withLatestFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax-calculation-result-page',
  templateUrl: './tax-calculation-result-page.component.html',
  styleUrl: './tax-calculation-result-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxCalculationResultPageComponent {
  taxInfo$: Observable<TaxInfo> = this.apiService.getTaxConfig().pipe(
    withLatestFrom(this.router.params),
    switchMap(([config, params]) =>
      this.apiService.getTaxInfo(+params['annualSalary'], config)
    )
  );

  constructor(
    private readonly apiService: ApiService,
    private readonly router: ActivatedRoute
  ) {}
}
