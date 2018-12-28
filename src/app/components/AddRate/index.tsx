import * as React from 'react';
import { Form, Icon, DatePicker, InputNumber, Button } from 'antd';
import './style.scss';

interface IProps {
  onAdd: () => void;
}

interface IState {
  id: number | null;
  date: Date | null;
  USD: number;
  EUR: number;
  RUB: number;
}

// const { Option } = Select;

export class AddRate extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {
    id: null,
    date: null,
    EUR: 0,
    USD: 0,
    RUB: 0
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // this.setState(e.target.)
    console.log(e.currentTarget);

    /*     this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }*/
  };

    private handleChange = (e: React.FormEvent<HTMLFormElement>) => {
      console.log(e.currentTarget);

    return;
  };

  public render() {
    return (
      <div className="add-rates-form">
        <Form layout="inline" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Form.Item label="Дата" >
            <DatePicker />
          </Form.Item>
          <Form.Item label="USD">
            <InputNumber name="usd" />
          </Form.Item>
          <Form.Item label="EUR">
            <InputNumber name="eur" />
          </Form.Item>
          <Form.Item label="RUB">
            <InputNumber name="rub" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            <Icon type="plus" /> Добавить
          </Button>
        </Form>
      </div>
    );
  }
}
