import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Dispatch } from 'redux';

import { ratesActions } from '@redux/actions';
import { RateState, IRootState, ICurrencyRates } from '@models';
import { Rates } from 'app/components';
import { entityAPI } from 'app/api';
import { AddRate } from 'app/components/Rates/AddRate';

import './style.scss';

interface IStateProps {
  currencyRates: RateState;
  isLoading: boolean;
  hasErrored: boolean;
}

interface IDispatchProps {
  onFetchData: () => void;
  onAddRate: (data: ICurrencyRates) => void;
}

interface IState {
  filterText: string;
}

type IProps = IStateProps & IDispatchProps;
class RatesContainer extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {
    filterText: ''
  };

  public handleOnSave = (data: any) => {
    // entityAPI.addRecord(JSON.stringify(data, null, 1));
  };

  public render() {
    return (
      <div className="content">
        {<AddRate onAdd={this.props.onAddRate} />}
        <div className="buttons">
          <Button onClick={this.props.onFetchData}>Загрузить</Button>
          <Button onClick={() => this.handleOnSave(this.props.currencyRates.rates)}>
            Сохранить
          </Button>
        </div>
        <Rates data={this.props.currencyRates.rates} isLoading={this.props.isLoading} />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  currencyRates: state.currencyRates,
  isLoading: state.currencyRates.isLoading,
  hasErrored: state.currencyRates.hasErrored
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    onFetchData: () => dispatch<any>(fetchData()),
    onAddRate: (data: ICurrencyRates) => dispatch<any>(addRecord(data))
  };
};

export const RateList = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(RatesContainer);

const fetchData = () => {
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
