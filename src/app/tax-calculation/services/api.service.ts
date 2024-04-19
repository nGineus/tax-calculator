import { Injectable } from '@angular/core';
import { TaxService } from './tax.service';
import { Observable, of } from 'rxjs';
import { TaxInfo } from '../interfaces/tax-info';
import { TaxConfig } from '../interfaces/tax-config';
import { DEFAULT_TAX_CONFIG } from '../constants/default-tax-config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly taxService: TaxService) {}

  getTaxConfig(): Observable<TaxConfig> {
    // TODO change to cached api call
    return of(DEFAULT_TAX_CONFIG);
  }

  getTaxInfo(
    grossAnnualSalary: number,
    config: TaxConfig
  ): Observable<TaxInfo> {
    // TODO change to api call
    return of(this.taxService.calculateTax(grossAnnualSalary, config));
  }
}
