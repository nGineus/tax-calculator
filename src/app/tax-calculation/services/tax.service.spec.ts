import { TestBed } from '@angular/core/testing';

import { TaxService } from './tax.service';
import { TaxConfig } from '../interfaces/tax-config';

describe('TaxService', () => {
  let service: TaxService;

  const mockTaxConfiguration: TaxConfig = {
    taxBandALimit: 5000,
    taxBandBLimit: 20000,
    taxBandARatePercents: 0,
    taxBandBRatePercents: 20,
    taxBandCRatePercents: 40,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateTax', () => {
    it('WHEN gross annual salary 5000', () => {
      const expectedResult = {
        grossAnnualSalary: 5000,
        grossMonthlySalary: 416.67,
        netAnnualSalary: 5000,
        netMonthlySalary: 416.67,
        monthlyTaxPaid: 0,
        annualTaxPaid: 0,
      };

      const actualResult = service.calculateTax(5000, mockTaxConfiguration);

      expect(actualResult).toEqual(expectedResult);
    });

    it('WHEN gross annual salary 15000', () => {
      const expectedResult = {
        grossAnnualSalary: 15000,
        grossMonthlySalary: 1250,
        netAnnualSalary: 13000,
        netMonthlySalary: 1083.33,
        monthlyTaxPaid: 166.67,
        annualTaxPaid: 2000,
      };

      const actualResult = service.calculateTax(15000, mockTaxConfiguration);

      expect(actualResult).toEqual(expectedResult);
    });

    it('WHEN gross annual salary 0', () => {
      const expectedResult = {
        netAnnualSalary: 0,
        grossAnnualSalary: 0,
        grossMonthlySalary: 0,
        netMonthlySalary: 0,
        monthlyTaxPaid: 0,
        annualTaxPaid: 0,
      };

      const actualResult = service.calculateTax(0, mockTaxConfiguration);

      expect(actualResult).toEqual(expectedResult);
    });

    it('WHEN gross annual salary 40000', () => {
      const expectedResult = {
        grossAnnualSalary: 40000,
        grossMonthlySalary: 3333.33,
        netAnnualSalary: 29000,
        netMonthlySalary: 2416.67,
        monthlyTaxPaid: 916.67,
        annualTaxPaid: 11000,
      };

      const actualResult = service.calculateTax(40000, mockTaxConfiguration);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
