import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { TRatesActions } from '@redux/actions';
import { RateState, testData } from '@models';
import { Header, Rates } from 'app/components';

// import * as style from './style.css';
import './style.scss';

export interface IProps extends RouteComponentProps<void> {
  rates: RateState;
  actions: TRatesActions;
}

const filteredRates: RateState = testData;

export class App extends React.Component<IProps> {
  public render() {
    return (
      <div className="main-container">
        <Header />
        <Rates data={filteredRates} />
      </div>
    );
  }
}
