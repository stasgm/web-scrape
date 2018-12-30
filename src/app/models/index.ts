import { IRateModel } from './rates-model';
import { IOptions } from './app-model';

export {
  IRateModel as RateState,
  IRate,
  ICurrencyCode,
  ICurrencyRates,
  ICurrency
} from './rates-model';

export { IOptions, IOptions as OptionsState } from './app-model';

export interface IRootState {
  currencyRates: IRateModel;
  options: IOptions;
}
