import React from 'react';
import { Route } from 'react-router-dom';
import { Linkmenu } from '@components/app/menu/Linkmenu';
import { RoutesEnum } from '@common/config/router.config';
import { GameList, RateList } from '@components/scrape/';
import './main.scss';

/* export interface IMainProps {}

export interface IMainState {} */

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="main-container">
        <Linkmenu />
        <Route exact={true} path={RoutesEnum.Root} component={() => <div>hello</div>} />
        <Route path={RoutesEnum.Rates} component={RateList} />
        <Route path={RoutesEnum.Games} component={GameList} />
      </div>
    );
  }
}
