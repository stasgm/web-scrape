import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { IDispatchProps, IStateProps } from 'app/containers/main';

import './style.scss';

interface ITableTitle {
  key?: string;
  date: string;
  USD: number;
  EUR: number;
  RUB: number;
}
export class Main extends React.PureComponent<IStateProps & IDispatchProps, {}> {
  public componentDidMount() {
    if (this.props.currencies.length === 0) this.props.onFetchData();
  }

  private getData = (data: ICurrencyRates[]): ITableTitle[] => {
    return data
      .sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())
      .map((i: ICurrencyRates) => {
        return {
          key: i.id,
          date: new Date(i.date).toLocaleDateString(),
          USD: i.currencies.USD ? i.currencies.USD.rate : 0,
          EUR: i.currencies.EUR ? i.currencies.EUR.rate : 0,
          RUB: i.currencies.RUB ? i.currencies.RUB.rate : 0
        };
      });
  };

  public render() {
    const tableData = this.getData(this.props.currencies);

    const columns: Array<ColumnProps<ITableTitle>> = [
      { title: 'Наименовние', dataIndex: 'name', key: 'name' },
      { title: 'Курс НБРБ', dataIndex: 'rate', key: 'rate' },
      { title: 'Продажа', dataIndex: 'rate', key: 'rate' },
      { title: 'Покупка', dataIndex: 'rate', key: 'rate' }     ];

    return (
      <div>
        <h3 style={{ marginBottom: 16 }}>Выбранные валюты:</h3>
        <Table<ITableTitle>
          bordered={false}
          columns={columns}
        /*   expandedRowRender={(rec) =>
          expandedRowRender(
            props.data.rates.find((i) => i.date.toLocaleDateString() === rec.date)!.currencies
          )
        } */
        dataSource={tableData}
        {/* <List
          bordered={true}
          dataSource={this.props.currencies}
          renderItem={(item: string) => <List.Item>{item}</List.Item>}
        /> */}
      </div>
    );
  }
}
