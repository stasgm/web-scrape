import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'antd';
import { RootState } from '@src/reducers/rootReducer';
import { addRate } from '@src/actions/rates';
import { entityAPI } from '../../api';
import { actions } from '@src/actionTypes/actionTypesRates';
import { IRatesEntity, IRateEntity } from '@src/common/rateEntity';
import { actionTypeEnumToString } from '@src/actionTypes/';

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

interface IProps {
  onAdd: (payload: {}) => void;
  onFetchRates: () => void;
  list: IRateEntity[];
}

const RateListContainer: React.SFC<IProps> = props => {
  return (
    <>
      <Button onClick={() => props.onFetchRates()}>Save</Button>
      <Table columns={columns} dataSource={props.list} size="small" />
    </>
  );
};

const fetchMembersCompleted = (rates: IRateEntity[]) => ({
  type: actionTypeEnumToString(actions.FETCH_RATES),
  payload: rates,
});

const fetchRates = () => {
  entityAPI
    .fetchRateData()
    .then(data => {
      console.log('go');
      fetchMembersCompleted(data);
    })
    .catch(e => console.log({ statusMessage: `Ошибка: ${e.message}`, loadingRateStatus: false }));
};

const mapStateToProps = (state: RootState) => ({list: state.rates.list});

export const RateList = connect(
  mapStateToProps,
  {
    onAdd: (payload: {}) => addRate(payload),
    onFetchRates: () => fetchRates(),
  }
)(RateListContainer);
