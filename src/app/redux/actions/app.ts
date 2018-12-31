import { createAsyncAction } from 'typesafe-actions';
import { ProfileState } from '@models';

export const profileActions = {
  fetchProfile: createAsyncAction(
    'REQUEST_FETCH_PROFILE',
    'REQUEST_FETCH_PROFILE_SUCCEEDED',
    'REQUEST_FETCH_PROFILE_FAILED'
  )<void, ProfileState, Error>()
};

// export type TPROFILEActions = ActionType<typeof PROFILEActions>;
