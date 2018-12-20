export interface ICurrency {
  id: number;
  name: string;
}

export interface IRate {
  date: Date;
  rate: number;
}

export interface ICurrencyRate {
  currency: ICurrency;
  rates: IRate[];
}
export interface IRateModel {
  list: ICurrencyRate[];
}
