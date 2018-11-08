import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Icon } from 'antd';
import { RootState } from '@src/reducers/rootReducer';
import { addRate } from '@src/actions/rates';

// import { entityAPI } from '../../api';

export interface IRateRecord {
  key: number;
  name: string;
  buy: number;
  sell: number;
}

export interface IRateData {
  lines: IRateRecord[];
}

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

const RateListContainer: React.SFC<any> = props => {
  return (
    <>
      <Button onClick={() => props.onAdd}>Save</Button>
      <Table columns={columns} dataSource={props.list} size="small" />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

export const RateList = connect(
  mapStateToProps,
  {
    onAdd: () => addRate
  }
)(RateListContainer);
