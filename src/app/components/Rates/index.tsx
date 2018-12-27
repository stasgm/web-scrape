import * as React from 'react';
// import * as style from './style.css';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

// import { RateState } from '@models';
import { ICurrencyRates } from '@models';
// import { entityAPI } from 'app/api';

interface IProps {
  data: ICurrencyRates[];
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
  date: string;
  USD: number;
  EUR: number;
  RUB: number;
}

const getDate = (data: ICurrencyRates[]): ITableTitle[] => {
  // console.log(data);
  return data.map((i: ICurrencyRates) => {
    return {
      date: new Date(i.date).toLocaleDateString(),
      USD: i.currencies.USD ? i.currencies.USD.rate : 0,
      EUR: i.currencies.EUR ? i.currencies.EUR.rate : 0,
      RUB: i.currencies.RUB ? i.currencies.RUB.rate : 0
    };
  });
};

export const Rates = (props: IProps) => {
  const tableData: ITableTitle[] = [];
  // const tableData = getDate(props.data);
  console.log('rates', props.data);

  const columns: Array<ColumnProps<ITableTitle>> = [
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'USD', dataIndex: 'USD', key: 'USD', align: 'right' },
    { title: 'EUR', dataIndex: 'EUR', key: 'EUR', align: 'right' },
    { title: 'RUB', dataIndex: 'RUB', key: 'RUB', align: 'right' }
  ];

  return (
    <>
      <Table<ITableTitle>
        bordered={false}
        columns={columns}
        /*   expandedRowRender={(rec) =>
          expandedRowRender(
            props.data.rates.find((i) => i.date.toLocaleDateString() === rec.date)!.currencies
          )
        } */
        dataSource={tableData}
      />
    </>
  );
};
