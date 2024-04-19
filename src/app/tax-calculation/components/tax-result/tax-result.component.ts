import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaxInfo } from '../../interfaces/tax-info';
import { TaxRoutes } from '../../constants/tax-routes';

@Component({
  selector: 'app-tax-result',
  templateUrl: './tax-result.component.html',
  styleUrl: './tax-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxResultComponent {
  protected readonly TaxRoutes = TaxRoutes;

  @Input() taxInfo!: TaxInfo | null;
}
