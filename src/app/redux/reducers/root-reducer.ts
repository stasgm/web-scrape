import { combineReducers } from 'redux';
import { IRootState } from '@models';

import { ratesReducer } from './rates';

export const rootReducer = combineReducers<IRootState>({
  currencyRates: ratesReducer
});
