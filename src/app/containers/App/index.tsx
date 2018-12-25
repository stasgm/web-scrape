import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { TRatesActions } from '@redux/actions';
import { RateState, testData } from '@models';
import { Header, Rates } from 'app/components';
import { Button } from 'antd';
import { entityAPI } from 'app/api';
// import * as style from './style.css';
import './style.scss';

export interface IProps extends RouteComponentProps<void> {
  rates: RateState;
  actions: TRatesActions;
}

export interface IState {
  rates: RateState;
  actions?: TRatesActions;
}

// const filteredRates: RateState = testData;

export class App extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {
    rates: { rates: [] }
  };

  public handleOnSave = (data: any) => {
    entityAPI.addRecord(JSON.stringify(data, null, 1));
  };

  public fetchData = async () => {
    try {
      const rateList = await entityAPI.fetchData();
      console.log({ statusMessage: `Загружено: ${JSON.stringify(rateList, null, 1)}` });
      this.setState({ rates: rateList });
    } catch (err) {
      console.log({ statusMessage: `Ошибка: ${err.message}`, loadingRateStatus: false });
    }
  };
  public render() {
    return (
      <div className="main-container">
        <Header />
        <Button onClick={this.fetchData}>Загрузить</Button>
        <Button onClick={() => this.handleOnSave(this.state.rates)}>Сохранить</Button>
        <Rates data={this.state.rates} />
      </div>
    );
  }
}
