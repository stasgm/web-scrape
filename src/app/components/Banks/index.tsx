import * as React from 'react';
import Table, { ColumnProps } from 'antd/lib/table';

import { IBank } from '@models';
import { BanksProps } from 'app/containers';

import './styles.scss';

interface ITableTitle {
  key: number;
  name: string;
  shortName: string;
}

export class Banks extends React.PureComponent<BanksProps, {}> {
  public componentDidMount = () => {
    if (Object.keys(this.props.banks).length === 0 && this.props.banks.constructor === Object) {
      this.props.fetchData();
    }
  };

  /*   public handleChange = (currency: string[]) => {
    console.log(currency);
    this.setState({
      ...this.state
      // selectedCurrencies: this.state.currencies.filter((itm) => currency.includes(itm.shortName))
    });
    return;
  }; */

  private getData = (data: IBank[]): ITableTitle[] =>
    data.map((i) => ({ key: i.id, name: i.NrBank, shortName: i.NmBankShort }));

  public render() {
    const tableData = this.getData(this.props.banks);

    const columns: Array<ColumnProps<ITableTitle>> = [
      { title: 'ID', dataIndex: 'key', key: 'key' },
      { title: 'Наименование', dataIndex: 'name', key: 'name' },
      { title: 'Код', dataIndex: 'shortName', key: 'shortName' }
    ];

    return (
      <>
        <div className="header">
          <h3 style={{ marginBottom: 16 }}>Список банков:</h3>
        </div>
        <div className="content-container">
          <Table<ITableTitle>
            bordered={false}
            columns={columns}
            // loading={props.isLoading}
            dataSource={tableData}
          />
        </div>
      </>
    );
  }
}
