import { ActionType, getType } from 'typesafe-actions';
import * as profile from '../actions/app';
import { ProfileState } from '@models';
import { Reducer } from 'redux';

export type ProfilesAction = ActionType<typeof profile>;

const initialState: ProfileState = {
  options: {
    currencies: []
  },
  name: ''
};

export const profileReducer: Reducer<ProfileState, ProfilesAction> = (
  state = initialState,
  action
): ProfileState => {
  switch (action.type) {
    case getType(profile.profileActions.fetchProfile.request): {
      return state;
    }
    case getType(profile.profileActions.fetchProfile.success): {
      return action.payload;
    }
    case getType(profile.profileActions.fetchProfile.failure): {
      return state;
    }
    default:
      return state;
  }
};
