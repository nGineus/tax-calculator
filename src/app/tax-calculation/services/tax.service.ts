import { Injectable } from '@angular/core';
import { TaxConfig } from '../interfaces/tax-config';
import { TaxInfo } from '../interfaces/tax-info';

@Injectable()
export class TaxService {
  calculateTax(grossAnnualSalary = 0, taxConfig: TaxConfig): TaxInfo {
    const salaryInBandA = +Math.min(
      grossAnnualSalary,
      taxConfig.taxBandALimit
    ).toFixed(2);
    const salaryInBandB = +Math.min(
      grossAnnualSalary - salaryInBandA,
      taxConfig.taxBandBLimit - taxConfig.taxBandALimit
    ).toFixed(2);
    const salaryInBandC = +Math.max(
      grossAnnualSalary - salaryInBandA - salaryInBandB,
      0
    ).toFixed(2);

    const annualTaxPaid = +(
      salaryInBandA * (taxConfig.taxBandARatePercents / 100) +
      salaryInBandB * (taxConfig.taxBandBRatePercents / 100) +
      salaryInBandC * (taxConfig.taxBandCRatePercents / 100)
    ).toFixed(2);

    return {
      grossAnnualSalary,
      grossMonthlySalary: +(grossAnnualSalary / 12).toFixed(2),
      annualTaxPaid,
      netAnnualSalary: grossAnnualSalary - annualTaxPaid,
      netMonthlySalary: +((grossAnnualSalary - annualTaxPaid) / 12).toFixed(2),
      monthlyTaxPaid: +(annualTaxPaid / 12).toFixed(2),
      currencyCode: 'GBP',
    };
  }
}
