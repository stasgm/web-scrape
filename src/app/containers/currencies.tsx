// import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { profileActions } from '@redux/actions';
import { IRootState } from '@models';
import { Currency } from 'app/components';
import { entityAPI } from 'app/api';

export interface IStateProps {
  currencies: string[];
}

export interface IDispatchProps {
  onFetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  currencies: state.profile.options.currencies
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onFetchData: () => dispatch<any>(fetchOptions())
});

export const CurrenciesContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(Currency);

// TODO Вынести в ations
const fetchOptions = () => {
  return async (dispatch: Dispatch) => {
    dispatch(profileActions.fetchProfile.request());
    try {
      const res = await entityAPI.fetchProfile();
      dispatch(profileActions.fetchProfile.success(res));
    } catch (err) {
      dispatch(profileActions.fetchProfile.failure(err));
    }
  };
};
