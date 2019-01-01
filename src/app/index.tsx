import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { RatesContainer, MainContainer, CurrenciesContainer } from 'app/containers';
import { Header } from 'app/components';

export const App = hot(module)(() => (
  <div className="main-container">
    <Route component={Header} />
    <Switch>
      <Route exact={true} path="/" component={MainContainer} />
      <Route path="/rates" component={RatesContainer} />
      <Route path="/currencies" component={CurrenciesContainer} />
    </Switch>
  </div>
));
