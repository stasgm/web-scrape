import { IRootState } from '@models';
import { combineReducers } from 'redux';
import { ratesReducer } from './rates';
import { optionsReducer } from './app';

export { IRootState };

export const rootReducer = combineReducers<IRootState>({
  currencyRates: ratesReducer,
  options: optionsReducer
});
