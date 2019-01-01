// import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ratesActions } from '@redux/actions';
import { IRootState, ICurrentRates } from '@models';
import { Main } from 'app/components';
import { entityAPI } from 'app/api';

export interface IStateProps {
  currentRates: ICurrentRates;
}

export interface IDispatchProps {
  onFetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  currentRates: state.currencyRates.currentRates
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onFetchData: () => dispatch<any>(fetchCurrentRates())
});

export const MainContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(Main);

const fetchCurrentRates = () => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.fetchCurrentRates.request());
    try {
      const res = await entityAPI.fetchCurrentRates();
      dispatch(ratesActions.fetchCurrentRates.success(res));
    } catch (err) {
      dispatch(ratesActions.fetchCurrentRates.failure(err));
    }
  };
};

/* // TODO Вынести в ations
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
}; */
