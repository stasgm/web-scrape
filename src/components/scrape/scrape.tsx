import * as React from 'react';
// import { entityAPI } from './api';

// export interface IRateRecord {
//   key: number;
//   name: string;
//   buy: number;
//   sell: number;
// }

// export interface IRateData {
//   lines: IRateRecord[];
// }

// export interface IGameList {
//   date: string;
//   name: string;
//   size: string;
//   piers: string;
// }

// export interface IGameData {
//   list: IGameList[];
// }

// interface IState {
//   rateList: IRateData;
//   gameList: IGameData;
//   loadingRateStatus: boolean;
//   loadingGameStatus: boolean;
//   statusMessage: string;
// }

export class Scrape extends React.Component<{}, {}> {

  public render() {
    return (
      <>
        <div>Scrape test</div>
        {/*        <div>{this.state.statusMessage}</div>
        <Button onClick={this.handleLoadRatesButton} loading={this.state.loadingRateStatus}>
          Load rates
        </Button>
        <Button onClick={this.handleLoadGamesButton} loading={this.state.loadingGameStatus}>
          Load games
        </Button>
        <RateList list={this.state.rateList.lines} />
        <GameList list={this.state.gameList.list} /> */}
      </>
    );
  }

  // private getRatesData = () => {
  //   entityAPI
  //     .fetchRateData()
  //     .then(data => {
  //       this.setState({ rateList: data, loadingRateStatus: false });
  //     })
  //     .catch(e => this.setState({ statusMessage: `Ошибка: ${e.message}`, loadingRateStatus: false }));
  // };

  // private getGamesData = () => {
  //   entityAPI
  //     .fetchGameData()
  //     .then(data => {
  //       this.setState({ gameList: data, loadingGameStatus: false });
  //     })
  //     .catch(e => this.setState({ statusMessage: `Ошибка: ${e.message}`, loadingGameStatus: false }));
  // };

  // private handleLoadGamesButton = () => {
  //   this.setState(
  //     { gameList: this.initialState.gameList, loadingGameStatus: true, statusMessage: '' },
  //     this.getGamesData
  //   );
  // };

  // private handleLoadRatesButton = () => {
  //   this.setState(
  //     { rateList: this.initialState.rateList, loadingRateStatus: true, statusMessage: '' },
  //     this.getRatesData
  //   );
  // };
}
