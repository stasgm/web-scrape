import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { appReducer, IAppReducerState } from './appReducer';
// import { IRateEntity, rateReducer } from './_rateReducer';
import { IRatesEntity, ratesReducer } from './ratesReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  rates: ratesReducer
});

export interface IRootReducerState {
  app: IAppReducerState;
  rates: IRatesEntity;
}

export type RootState = StateType<typeof rootReducer>;
