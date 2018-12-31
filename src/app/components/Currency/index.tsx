import * as React from 'react';
import { Select, Button } from 'antd';

import { ICurrency } from '@models';
import { entityAPI } from 'app/api';
import Table, { ColumnProps } from 'antd/lib/table';

import './styles.scss';

interface IProps {
  name?: string;
  // currencies: ICurrency;
}

interface IState {
  currencies: ICurrency[];
  selectedCurrencies: ICurrency[];
  isLoading: boolean;
  hasErrored: boolean;
}

interface ITableTitle {
  key?: string;
  name: string;
}

const Option = Select.Option;

const getchildren = (currencies: ICurrency[]) => {
  return currencies.map((i: ICurrency) => (
    <Option key={i.shortName}>
      {i.shortName} ({i.code.toString()})
    </Option>
  ));
};

export class Currency extends React.PureComponent<IProps, IState> {
  public state: Readonly<IState> = {
    currencies: [],
    selectedCurrencies: [],
    hasErrored: false,
    isLoading: false
  };

  public componentDidMount = async () => {
    try {
      const currencies = await fetchCurrencies();
      this.setState({ ...this.state, currencies });
    } catch (err) {
      console.log(err);
    }
  };

  public handleChange = (currency: string[]) => {
    console.log(currency);
    this.setState({
      ...this.state,
      selectedCurrencies: this.state.currencies.filter((itm) => currency.includes(itm.shortName))
    });
    return;
  };

  public render() {
    const columns: Array<ColumnProps<ITableTitle>> = [
      { title: 'ID', dataIndex: 'key', key: 'key' },
      { title: 'Наименование', dataIndex: 'name', key: 'name' }
    ];

    const tableData: ITableTitle[] = this.state.selectedCurrencies.map((i) => {
      return { key: i.code, name: i.shortName };
    });

    return (
      <>
        <div className="header">
          <h3 style={{ marginBottom: 16 }}>Выбор валют для курсов:</h3>
          <div className="input-container">
            <div className="input-box-container">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Выбор основных валют"
                defaultValue={this.state.selectedCurrencies.map((i) => i.shortName)}
                onChange={this.handleChange}
              >
                {getchildren(this.state.currencies)}
              </Select>
            </div>
            <div className="button-container">
              <Button type="primary" className="button-control" icon="sync">
                Сохранить
              </Button>
            </div>
          </div>
        </div>
        <div className="content-container">
          <Table<ITableTitle>
            bordered={false}
            columns={columns}
            /*   expandedRowRender={(rec) =>
          expandedRowRender(
            props.data.rates.find((i) => i.date.toLocaleDateString() === rec.date)!.currencies
          )
        } */
            // loading={props.isLoading}
            dataSource={tableData}
          />
        </div>
      </>
    );
  }
}

const fetchCurrencies = async () => {
  try {
    const res = await entityAPI.fetchCurrencies();
    return res;
    // dispatch(ratesActions.fetchRates.success(res));
  } catch (err) {
    return [];
    // dispatch(ratesActions.fetchRates.failure(err));
  }
};
