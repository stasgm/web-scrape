import * as React from 'react';
import { Table, Button } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { ICurrencyRates } from '@models';
import { RatesProps } from 'app/containers/';
/* interface IProps {
  data: ICurrencyRates[];
  isLoading: boolean;
} */

/* const expandedRowRender = (rates: ICurrency) => {
  interface ITableRecord {
    key: string;
    curName: string;
    rate: number;
    ask: number;
    bid: number;
  }

  const columns: Array<ColumnProps<ITableRecord>> = [
    { title: 'Наименование', dataIndex: 'curName', key: 'curName' },
    { title: 'НБРБ', dataIndex: 'rate', key: 'rate' },
    { title: 'Покупка', dataIndex: 'ask', key: 'ask' },
    { title: 'Продажа', dataIndex: 'bid', key: 'bid' }
  ];

  const data: ITableRecord[] = Object.keys(rates).map(
    (i: string): ITableRecord => ({
      key: i,
      curName: i,
      rate: rates[i] ? rates[i].rate : 0,
      ask: rates[i] ? rates[i].ask : 0,
      bid: rates[i] ? rates[i].bid : 0
    })
  );

  return <Table<ITableRecord> columns={columns} dataSource={data} pagination={false} />;
};
 */
interface ITableTitle {
  key?: string;
  date: string;
  USD: number;
  EUR: number;
  RUB: number;
}

const getData = (data: ICurrencyRates[]): ITableTitle[] => {
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

const RateList = (props: { data: ICurrencyRates[]; isLoading: boolean }) => {
  const tableData = getData(props.data);

  const columns: Array<ColumnProps<ITableTitle>> = [
    { title: 'ID', dataIndex: 'key', key: 'key' },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'USD', dataIndex: 'USD', key: 'USD', align: 'right' },
    { title: 'EUR', dataIndex: 'EUR', key: 'EUR', align: 'right' },
    { title: 'RUB', dataIndex: 'RUB', key: 'RUB', align: 'right' }
  ];
  return (
    <>
      <h3 style={{ marginBottom: 16 }}>Курсы выбранных валюты:</h3>
      <Table<ITableTitle>
        bordered={false}
        columns={columns}
        /*   expandedRowRender={(rec) =>
          expandedRowRender(
            props.data.rates.find((i) => i.date.toLocaleDateString() === rec.date)!.currencies
          )
        } */
        loading={props.isLoading}
        dataSource={tableData}
      />
    </>
  );
};
export class Rates extends React.Component<RatesProps, {}> {
  public handleOnSave = (data: any) => {
    // entityAPI.addRecord(JSON.stringify(data, null, 1));
  };

  // export const Rates = (props: RatesProps) => {

  public render() {
    return (
      <div className="content">
        {/* {<AddRate onAdd={this.props.onAddRate} />} */}
        <div className="buttons">
          <Button onClick={this.props.onFetchData}>Загрузить</Button>
          <Button onClick={() => this.handleOnSave(this.props.currencyRates.rates)}>
            Сохранить
          </Button>
        </div>
        <RateList data={this.props.currencyRates.rates} isLoading={this.props.isLoading} />
      </div>
    );
  }
}
