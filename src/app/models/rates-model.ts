export interface IRate {
  id: number;
  currency: string;
  date: string;
  bank_id: number;
  ask: number;
  bid: number;
}

/* export interface ICurrencyRate {
  [value: string]: IRate;
} */

export interface ICurrency {
  Cur_ID: number;
  Cur_Code: string;
  Cur_Abbreviation: string;
  Cur_Name: string;
  id: number;
}

export interface IBank {
  CDBank: string;
  NrBank: string;
  NmBankShort: string;
  id: number;
}

/* export interface ICurrencyRates {
  id?: string;
  date: Date;
  currencies: ICurrencyRate[];
} */

export interface IRateModel {
  rates: IRate[];
  banks: IBank[];
  currencies: ICurrency[];
  // currentRates: ICurrentRates;
  isLoading: boolean;
  hasErrored: boolean;
}

/* export interface ICurrentRates {
  date: Date;
  currencies: ICurrencyRate;
} */
