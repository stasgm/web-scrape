// import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ratesActions } from '@redux/actions';
import { IRootState, IRate } from '@models';
import { Main } from 'app/components';
import { entityAPI } from 'app/api';

export interface IStateProps {
  currentRates: IRate[];
}

export interface IDispatchProps {
  onFetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  currentRates: state.currencyRates.rates
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
    dispatch(ratesActions.loadCurrentRates.request());
    try {
      const res = await entityAPI.fetchRates(new Date());
      dispatch(ratesActions.loadCurrentRates.success(res));
    } catch (err) {
      dispatch(ratesActions.loadCurrentRates.failure(err));
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
