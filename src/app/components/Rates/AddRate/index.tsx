// import * as React from 'react';
// import * as moment from 'moment';
// import { Form, Icon, DatePicker, InputNumber, Button } from 'antd';
// import './style.scss';
// import { ICurrencyRates } from '@models';

// interface IProps {
//   onAdd: (data: ICurrencyRates) => void;
// }

// interface IState {
//   id: number | null;
//   date: moment.Moment;
//   USD: number;
//   EUR: number;
//   RUB: number;
// }

// // const { Option } = Select;

// export class AddRate extends React.Component<IProps, IState> {
//   public state: Readonly<IState> = {
//     id: null,
//     date: moment([]),
//     EUR: 0,
//     USD: 0,
//     RUB: 0
//   };

//   private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     /*     const { date, USD, EUR, RUB } = this.state;
//     this.props.onAdd({
//       date: date.toDate(),
//       currencies: {
//         USD: { rate: USD, ask: 0, bid: 0 },
//         EUR: { rate: EUR, bid: 0, ask: 0 },
//         RUB: { rate: RUB, bid: 0, ask: 0 }
//       }
//     }); */
//   };

//   public render() {
//     return (
//       <div className="add-rates-form">
//         <Form layout="inline" onSubmit={this.handleSubmit}>
//           <Form.Item label="Дата">
//             <DatePicker onChange={(e: any) => this.setState({ date: e })} value={this.state.date} />
//           </Form.Item>
//           <Form.Item label="USD">
//             <InputNumber
//               name="usd"
//               onChange={(e: any) => this.setState({ USD: e })}
//               value={this.state.USD}
//             />
//           </Form.Item>
//           <Form.Item label="EUR">
//             <InputNumber
//               name="eur"
//               onChange={(e: any) => this.setState({ EUR: e })}
//               value={this.state.EUR}
//             />
//           </Form.Item>
//           <Form.Item label="RUB">
//             <InputNumber
//               name="rub"
//               onChange={(e: any) => this.setState({ RUB: e })}
//               value={this.state.RUB}
//             />
//           </Form.Item>
//           <Button type="primary" htmlType="submit">
//             <Icon type="plus" /> Добавить
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }
