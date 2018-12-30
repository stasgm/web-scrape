import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { RateList } from 'app/containers/RateList';
import { Header, Currency, Main } from 'app/components';

export const App = hot(module)(() => (
  <div className="main-container">
    <Route component={Header} />
    <Switch>
      <Route exact={true} path="/" component={Main} />
      <Route path="/rates" component={RateList} />
      <Route path="/currencies" component={Currency} />
    </Switch>
  </div>
));
