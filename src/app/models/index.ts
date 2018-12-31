import { IRateModel } from './rates-model';
import { IProfile } from './app-model';

export {
  IRateModel as RateState,
  IRate,
  ICurrencyCode,
  ICurrencyRates,
  ICurrency
} from './rates-model';

export { IProfile, IProfile as ProfileState } from './app-model';

export interface IRootState {
  currencyRates: IRateModel;
  profile: IProfile;
}
