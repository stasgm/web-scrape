import { IRateModel } from './rates-model';
export { IRateModel as RateState, testData, IRate, ICurrency, ICurrencyRates } from './rates-model';

export interface IRootState {
  rates: IRateModel;
}
