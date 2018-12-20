import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { TodoActions, ActionTypes } from '@redux/actions';
import { IRootState, TodoState } from '@redux/reducers';
import { IRateModel, testData } from '@models';
// import { Header, TodoList, Footer } from 'app/components';

import * as style from './style.css';

export interface IProps extends RouteComponentProps<void> {
  todos: TodoState;
  actions: TodoActions;
  // filter: Filter;
}

const filteredRates = testData;

export class App extends React.Component<IProps> {
  public render() {
    return (
      <div className={style.normal}>
        <Header />
        <Rates rates={filteredRates} actions={actions} />
      </div>
    );
  }
}
