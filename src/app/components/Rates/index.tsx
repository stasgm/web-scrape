import * as React from 'react';
// import * as style from './style.css';
import { RateState, ICurrencyRates /* ICurrency, IRate */ } from '@models';
import { Table } from 'antd';

interface IProps {
  data: RateState;
}

/* const RateLine = () => {
  return;
};
 */
/* const getLine = (arr: any) =>
  Object.keys(arr).map((itm) => `${itm} - ${arr[itm].map((i: any) => i)}`); */

// const expandedRowRender = () => [];

/* const expandedRowRender = () => {
  const columns = [
    { title: 'Наименование', dataIndex: 'curName', key: 'curName' },
    { title: 'НБРБ', dataIndex: 'rate', key: 'rate' },
    { title: 'Покупка', dataIndex: 'ask', key: 'ask' },
    { title: 'Продажа', dataIndex: 'bid', key: 'bid' }
  ];

  const data: any = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56'
    });
  }
  return <Table columns={columns} dataSource={data} pagination={false} />;
}; */
interface ITableTitle {
  date: string;
  USD: number;
  EUR: number;
  RUB: number;
}

const getDate = (date: ICurrencyRates[]): ITableTitle[] => {
  return date.map((i: ICurrencyRates) => {
    return {
      date: i.date.toLocaleDateString(),
      USD: i.currencies.USD ? i.currencies.USD.rate : 0,
      EUR: i.currencies.EUR ? i.currencies.EUR.rate : 0,
      RUB: i.currencies.RUB ? i.currencies.RUB.rate : 0
    };
  });
};

export const Rates = (props: IProps) => {
  const tableData = getDate(props.data.rates);

  const columns = [
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'USD', dataIndex: 'USD', key: 'USD' },
    { title: 'EUR', dataIndex: 'EUR', key: 'EUR' },
    { title: 'RUB', dataIndex: 'RUB', key: 'RUB' }
  ];

  return (
    <Table
      className="components-table-demo-nested"
      size="small"
      bordered={true}
      columns={columns}
      // expandedRowRender={expandedRowRender}
      dataSource={tableData}
    />
  );
};
