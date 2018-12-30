import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { ICurrencyRates } from '@models';

interface IProps {
  data: ICurrencyRates[];
  isLoading: boolean;
}

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

const getDate = (data: ICurrencyRates[]): ITableTitle[] => {
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

export const Rates = (props: IProps) => {
  const tableData = getDate(props.data);

  const columns: Array<ColumnProps<ITableTitle>> = [
    { title: 'ID', dataIndex: 'key', key: 'key' },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'USD', dataIndex: 'USD', key: 'USD', align: 'right' },
    { title: 'EUR', dataIndex: 'EUR', key: 'EUR', align: 'right' },
    { title: 'RUB', dataIndex: 'RUB', key: 'RUB', align: 'right' }
  ];

  return (
    <>
      <h1>Курсы</h1>
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
