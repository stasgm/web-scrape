export interface IRate {
  rate: number;
  ask: number;
  bid: number;
}

export interface ICurrencyRate {
  [value: string]: IRate;
}

export interface ICurrency {
  shortName: string;
  abbr?: string;
  code: string;
  name: string;
}

export interface ICurrencyRates {
  id?: string;
  date: Date;
  currencies: ICurrencyRate[];
}

export interface IRateModel {
  rates: ICurrencyRates[];
  currentRates: ICurrentRates;
  isLoading: boolean;
  hasErrored: boolean;
}

export interface ICurrentRates {
  date: Date;
  currencies: ICurrencyRate;
}
