import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import { configureStore } from '@redux/store';
import { App } from 'app';
import './app/styles/index.scss';
import { IRootState } from 'app/models';

const initialState: IRootState = {
  currencyRates: {
    rates: [],
    hasErrored: false,
    isLoading: false
  },
  options: {
    name: '',
    currencies: []
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
