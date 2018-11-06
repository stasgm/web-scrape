import * as React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import { IRateData, IRateRecord } from '../scrape';

const columns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Покупка',
    dataIndex: 'buy',
    key: 'buy'
  },
  {
    title: 'Продажа',
    dataIndex: 'sell',
    key: 'sell'
  }
];

export const RateList: React.SFC<any> = props => {
  return <Table columns={columns} dataSource={props.list} />;
  /*     <ul>
      {props.output.lines.map((i: IRateRecord, idx) => {
        if (isAN(i['buy-rate'])) {
          return (
            <li key={idx}>
              {i.name}: {i['buy-rate']} - {i['sell-rate']}
            </li>
          );
        }
      })}
    </ul>
  ); */
};

function isAN(value: string) {
  if (!value) {
    return false;
  }
  value = value.replace(',', '.');
  return Number.isFinite(parseFloat(value));
}
