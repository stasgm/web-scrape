import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from './store/configureStore';
import { App } from '@src/components';

import './styles/index.css';
import config from '../configs/config.json';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById(config.webpack.appMountNodeId) as HTMLElement,
);
