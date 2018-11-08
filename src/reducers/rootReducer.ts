import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { appReducer, IAppReducerState } from './appReducer';
import { IRateEntity, rateReducer } from './rateReducer';
import { IRatesEntity, ratesReducer } from './ratesReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  rate: rateReducer,
  rates: ratesReducer
});

export interface IRootReducerState {
  app: IAppReducerState;
  rate: IRateEntity;
  rates: IRatesEntity;
}

export type RootState = StateType<typeof rootReducer>;
