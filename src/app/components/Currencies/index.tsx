import * as React from 'react';
import { Select, Button } from 'antd';

import { ICurrency } from '@models';
import { CurrenciesProps } from 'app/containers';
import Table, { ColumnProps } from 'antd/lib/table';

import './styles.scss';

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
    <Option key={i.Cur_Abbreviation}>
      {i.Cur_Abbreviation} ({i.Cur_Code.toString()})
    </Option>
  ));
};

export class Currencies extends React.PureComponent<CurrenciesProps, IState> {
  public state: Readonly<IState> = {
    currencies: [],
    selectedCurrencies: [],
    hasErrored: false,
    isLoading: false
  };

  public componentDidMount = () => {
    console.log(this.props.currencies.constructor);
    if (
      Object.keys(this.props.currencies).length === 0 &&
      this.props.currencies.constructor === Object
    ) {
      this.props.fetchData();
    }
  };

  public handleChange = (currency: string[]) => {
    /*     console.log(currency);
    this.setState({
      ...this.state,
      selectedCurrencies: this.state.currencies.filter((itm) => currency.includes(itm.shortName))
    }); */
    return;
  };

  public render() {
    const columns: Array<ColumnProps<ITableTitle>> = [
      { title: 'ID', dataIndex: 'key', key: 'key' },
      { title: 'Наименование', dataIndex: 'name', key: 'name' },
      { title: 'Код', dataIndex: 'code', key: 'code' }
    ];

    const tableData: ITableTitle[] = [];
    /*     const tableData: ITableTitle[] = this.state.selectedCurrencies.map((i) => {
      return [];
      // { key: i.code, name: i.shortName };
    }); */

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
                // defaultValue={this.state.selectedCurrencies.map((i) => i.shortName)}
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
            // loading={this.props.isLoading}
            dataSource={tableData}
          />
        </div>
      </>
    );
  }
}
