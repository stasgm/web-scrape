import * as React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { hot } from 'react-hot-loader';
import { RatesContainer, MainContainer, CurrenciesContainer, BanksContainer } from 'app/containers';
import { Header } from 'app/components';
import { IProfile, IRootState } from './models';
import { fetchProfile } from './redux/actions/app';

export const App = hot(module)(() => (
  <div className="main-container">
    <Route component={Header} />
    <Switch>
      <Route exact={true} path="/" component={MainContainer} />
      <Route path="/banks" component={BanksContainer} />
      <Route path="/currencies" component={CurrenciesContainer} />
      <Route path="/rates" component={RatesContainer} />
      <Route path="/map" />
    </Switch>
  </div>
));

export interface IStateProps {
  profile: IProfile;
}

export interface IDispatchProps {
  fetchData: () => void;
}

export type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => ({
  profile: state.profile
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  fetchData: () => dispatch<any>(fetchProfile())
});

export const AppContainer = connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps
)(App);
