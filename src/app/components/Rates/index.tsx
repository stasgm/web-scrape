import * as React from 'react';
// import * as style from './style.css';
import { Table, Button } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { RateState, ICurrencyRates, ICurrency } from '@models';
import { entityAPI } from 'app/api';
import { IRateModel } from 'app/models/rates-model';

interface IProps {
  data: RateState;
}

const expandedRowRender = (rates: ICurrency) => {
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

const handleOnSave = (data: string) => {
  entityAPI.addRecord(data);
};

const fetchData = (): IRateModel[] => {
  entityAPI
    .fetchData()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log({ statusMessage: `Ошибка: ${e.message}`, loadingRateStatus: false });
      return [];
    });
};

export const Rates = (props: IProps) => {
  const tableData = getDate(props.data.rates);

  const columns: Array<ColumnProps<ITableTitle>> = [
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'USD', dataIndex: 'USD', key: 'USD', align: 'right' },
    { title: 'EUR', dataIndex: 'EUR', key: 'EUR', align: 'right' },
    { title: 'RUB', dataIndex: 'RUB', key: 'RUB', align: 'right' }
  ];

  return (
    <>
      <Button onClick={fetchData}>Загрузить</Button>
      <Button onClick={() => handleOnSave(JSON.stringify(props.data.rates, null, 1))}>
        Сохранить
      </Button>
      <Table<ITableTitle>
        bordered={false}
        columns={columns}
        expandedRowRender={(rec) =>
          expandedRowRender(
            props.data.rates.find((i) => i.date.toLocaleDateString() === rec.date)!.currencies
          )
        }
        dataSource={tableData}
      />
    </>
  );
};
