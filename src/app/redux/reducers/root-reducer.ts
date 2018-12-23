import { combineReducers } from 'redux';
import { IRootState } from '@models';
// import { StateType } from 'typesafe-actions';

import { ratesReducer } from './rates';

export const rootReducer = combineReducers<IRootState>({
  rates: ratesReducer
});

// export type RootState = StateType<typeof rootReducer>;
