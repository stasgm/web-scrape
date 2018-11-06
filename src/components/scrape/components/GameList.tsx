import * as React from 'react';
import { Table, Input, Button, Icon } from 'antd';

const columns = [
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Размер',
    dataIndex: 'size',
    key: 'size'
  },
  {
    title: 'Пиры',
    dataIndex: 'piers',
    key: 'piers'
  }
];
export const GameList: React.SFC<any> = props => {
  return <Table columns={columns} dataSource={props.list} />;
  /* return (
    <ul>
      {props.list.map((i: IGameList, idx) => (
        <li key={idx}>{i.torrent[0].name}</li>
      ))}
    </ul>
  ); */
};
