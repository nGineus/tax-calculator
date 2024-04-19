import { TaxConfig } from '../interfaces/tax-config';

export const DEFAULT_TAX_CONFIG: TaxConfig = {
  taxBandALimit: 5000,
  taxBandBLimit: 20000,
  taxBandARatePercents: 0,
  taxBandBRatePercents: 20,
  taxBandCRatePercents: 40,
};
