import { IRateModel } from './rates-model';

export {
  IRateModel as RateState,
  testData,
  IRate,
  ICurrency,
  ICurrencyRates,
  Currencies
} from './rates-model';

export interface IRootState {
  currencyRates: IRateModel;
}
