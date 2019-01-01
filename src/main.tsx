import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import { configureStore } from '@redux/store';
import { App } from 'app';
import { IRootState } from 'app/models';

import 'app/styles/index.scss';

const initialState: IRootState = {
  currencyRates: {
    rates: [],
    currentRates: { currencies: {}, date: new Date() },
    hasErrored: false,
    isLoading: false
  },
  profile: {
    name: '',
    options: {
      currencies: []
    }
  }
};
// prepare store
const history = createBrowserHistory();
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
