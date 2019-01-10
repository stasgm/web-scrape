import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { ProfileState } from '@models';
import { entityAPI } from 'app/api';

export const profileActions = {
  loadProfile: createAsyncAction(
    'REQUEST_LOAD_PROFILE',
    'REQUEST_LOAD_PROFILE_SUCCEEDED',
    'REQUEST_LOAD_PROFILE_FAILED'
  )<void, ProfileState, Error>()
};

export const fetchProfile = () => {
  return async (dispatch: Dispatch) => {
    dispatch(profileActions.loadProfile.request());
    try {
      const res = await entityAPI.fetchProfile();
      dispatch(profileActions.loadProfile.success(res));
    } catch (err) {
      dispatch(profileActions.loadProfile.failure(err));
    }
  };
};
