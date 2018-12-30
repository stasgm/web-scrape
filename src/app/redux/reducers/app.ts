import { ActionType, getType } from 'typesafe-actions';
import * as options from '../actions/app';
import { OptionsState } from '@models';
import { Reducer } from 'redux';

export type OptionsAction = ActionType<typeof options>;

const initialState: OptionsState = {
  currencies: [],
  name: ''
};

export const optionsReducer: Reducer<OptionsState, OptionsAction> = (
  state = initialState,
  action
): OptionsState => {
  switch (action.type) {
    case getType(options.optionsActions.fetchOptions.request): {
      return state;
    }
    case getType(options.optionsActions.fetchOptions.success): {
      return action.payload;
    }
    case getType(options.optionsActions.fetchOptions.failure): {
      return state;
    }
    default:
      return state;
  }
};
