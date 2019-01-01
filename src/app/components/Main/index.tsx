import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { MainProps } from 'app/containers';

import './style.scss';
import { ICurrencyRate } from 'app/models';

interface ITableTitle {
  key?: string;
  name: string;
  rate: number;
  bid: number;
  ask: number;
}
export class Main extends React.PureComponent<MainProps, {}> {
  public componentDidMount() {
    // console.log('frst:', this.props.currentRates.currencies ? '1' : '2');

    if (
      Object.keys(this.props.currentRates.currencies).length === 0 &&
      this.props.currentRates.currencies.constructor === Object
    ) {
      this.props.onFetchData();
    }
  }

  private getData = (data: ICurrencyRate): ITableTitle[] =>
    Object.keys(data).map((i, idx) => ({
      key: idx.toString(),
      name: i,
      rate: data[i].rate,
      ask: data[i].ask,
      bid: data[i].bid
    }));

  public render() {
    const tableData = this.getData(this.props.currentRates.currencies);

    const columns: Array<ColumnProps<ITableTitle>> = [
      { title: 'Наименовние', dataIndex: 'name', key: 'name' },
      { title: 'Курс НБРБ', dataIndex: 'rate', key: 'rate' },
      { title: 'Продажа', dataIndex: 'bid', key: 'bid' },
      { title: 'Покупка', dataIndex: 'ask', key: 'ask' }
    ];

    return (
      <div>
        <h3 style={{ marginBottom: 16 }}>
          Выбранные валюты за: {new Date(this.props.currentRates.date).toLocaleString()}
        </h3>
        <Table<ITableTitle> columns={columns} dataSource={tableData} />
      </div>
    );
  }
}
