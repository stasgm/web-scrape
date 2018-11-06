import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@src/components';

import config from '../configs/config.json';

ReactDOM.render(<App />, document.getElementById(config.webpack.appMountNodeId) as HTMLElement);
