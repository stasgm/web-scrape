import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Dispatch } from 'redux';

import { ratesActions } from '@redux/actions';
import { RateState, IRootState } from '@models';
import { Header, Rates } from 'app/components';
import { entityAPI } from 'app/api';
import './style.scss';
import { AddRate } from 'app/components/AddRate';

interface IStateProps {
  currencyRates: RateState;
  isLoading: boolean;
  hasErrored: boolean;
}

interface IDispatchProps {
  onFetchData: () => void;
  onAddRate: () => void;
}

interface IState {
  filterText: string;
}

type IProps = IStateProps & IDispatchProps;
class AppContainer extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {
    filterText: ''
  };

  public handleOnSave = (data: any) => {
    entityAPI.addRecord(JSON.stringify(data, null, 1));
  };

  public render() {
    return (
      <div className="main-container">
        <Header />
        <div className="content">
          <AddRate onAdd={this.props.onAddRate}/>
          <div className="buttons">
            <Button onClick={this.props.onFetchData}>Загрузить</Button>
            <Button onClick={() => this.handleOnSave(this.props.currencyRates.rates)}>
              Сохранить
            </Button>
          </div>
          <Rates data={this.props.currencyRates.rates} isLoading={this.props.isLoading} />
        </div>
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
    onAddRate: () => dispatch(ratesActions.addRate({ ask: 0, bid: 0, rate: 0 }))
  };
};

export const App = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

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
