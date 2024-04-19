import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TaxInfo } from '../../interfaces/tax-info';
import { TaxRoutes } from '../../constants/tax-routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-result',
  templateUrl: './tax-result.component.html',
  styleUrl: './tax-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxResultComponent {
  @Input() taxInfo!: TaxInfo | null;
  @Output() toBack: EventEmitter<void> = new EventEmitter();

  constructor(private readonly router: Router) {}

  goBack(): void {
    this.router.navigate([TaxRoutes.HOME]);
  }
}
