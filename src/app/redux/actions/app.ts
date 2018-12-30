import { createAsyncAction } from 'typesafe-actions';
import { OptionsState } from '@models';

export const optionsActions = {
  fetchOptions: createAsyncAction(
    'REQUEST_FETCH_OPTIONS',
    'REQUEST_FETCH_OPTIONS_SUCCEEDED',
    'REQUEST_FETCH_OPTIONS_FAILED'
  )<void, OptionsState, Error>()
};

// export type TOptionsActions = ActionType<typeof optionsActions>;
