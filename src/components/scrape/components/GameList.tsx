import * as React from 'react';
import { IGameData, IGameList } from '../scrape';

export const GameList: React.SFC<IGameData> = props => {
  return (
    <ul>
      {props.list.map((i: IGameList, idx) => (
        <li key={idx}>{i.torrent[0].name}</li>
      ))}
    </ul>
  );
};
