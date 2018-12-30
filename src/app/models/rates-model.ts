export interface IRate {
  rate: number;
  ask: number;
  bid: number;
}

type Currencies = 'USD' | 'EUR' | 'RUB';

export type ICurrencyCode = { [k in Currencies]?: IRate };

export interface ICurrency {
  shortName: string;
  abbr?: ICurrencyCode;
  code: string;
  name: string;
}

export interface ICurrencyRates {
  id?: string;
  date: Date;
  currencies: ICurrencyCode;
}

export interface IRateModel {
  rates: ICurrencyRates[];
  isLoading: boolean;
  hasErrored: boolean;
}

export const testData: Partial<IRateModel> = {
  rates: [
    {
      date: new Date('2018-12-19T19:19:09+02:00'),
      currencies: {
        RUB: {
          rate: 0.386,
          ask: 0.4,
          bid: 0.39
        },
        USD: {
          rate: 27.86,
          ask: 28.1,
          bid: 27.65
        },
        EUR: {
          rate: 27.86,
          ask: 28.1,
          bid: 27.65
        }
      }
    },
    {
      date: new Date('2018-12-20T19:19:09+02:00'),
      currencies: {
        RUB: {
          rate: 0.41,
          ask: 0.42,
          bid: 0.4
        },
        USD: {
          rate: 27.96,
          ask: 28.0,
          bid: 27.5
        }
      }
    }
  ]
};
