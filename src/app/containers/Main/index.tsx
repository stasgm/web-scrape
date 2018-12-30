// import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ratesActions } from '@redux/actions';
import { IRootState } from '@models';
import { Main } from 'app/components';
import { entityAPI } from 'app/api';

interface IStateProps {
  currencies: string[];
}

interface IDispatchProps {
  onFetchData: () => void;
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  currencies: state.options.currencies
  // currencyRates: state.currencyRates,
  // isLoading: state.currencyRates.isLoading,
  // hasErrored: state.currencyRates.hasErrored
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    onFetchData: () => dispatch<any>(fetchCurrency())
  };
};

export const MainContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(Main);

const fetchCurrency = () => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.fetchRates.request());
    try {
      const res = await entityAPI.fetchRates();
      dispatch(ratesActions.fetchRates.success(res));
    } catch (err) {
      dispatch(ratesActions.fetchRates.failure(err));
    }
  };
};
/*
const addRecord = (data: ICurrencyRates) => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.addRateRequest.request());
    try {
      const res = await entityAPI.addRecord(data);
      dispatch(ratesActions.addRateRequest.success(res));
    } catch (err) {
      dispatch(ratesActions.addRateRequest.failure(err));
    }
  };
};
 */
