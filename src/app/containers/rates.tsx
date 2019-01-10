// import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ratesActions } from '@redux/actions';
import { RateState, IRootState } from '@models';
import { Rates } from 'app/components';
import { entityAPI } from 'app/api';
// import { AddRate } from 'app/components/Rates/AddRate';

interface IStateProps {
  currencyRates: RateState;
  isLoading: boolean;
  hasErrored: boolean;
}

interface IDispatchProps {
  onFetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  currencyRates: state.currencyRates,
  isLoading: state.currencyRates.isLoading,
  hasErrored: state.currencyRates.hasErrored
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    onFetchData: () => dispatch<any>(fetchData())
  };
};

export const RatesContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(Rates);

const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.loadRates.request());
    try {
      const res = await entityAPI.fetchRates(new Date());
      dispatch(ratesActions.loadRates.success(res));
    } catch (err) {
      dispatch(ratesActions.loadRates.failure(err));
    }
  };
};

/* const addRecord = (data: ICurrencyRates) => {
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
