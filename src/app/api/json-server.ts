import { ICurrency, IProfile, IBank, IRate } from '@models';
import { json, post } from './common/http.service';

export const fetchCurrencies = async (): Promise<ICurrency[]> => {
  return json('/currencies');
};

export const fetchBanks = async (): Promise<IBank[]> => {
  return json('/banks');
};

export const fetchRates = async (date: Date): Promise<IRate[]> => {
  return json(`/rates?date=${date}`);
};

export const fetchCurrentRates = async (): Promise<IRate[]> => {
  return json(`/rates?date=${new Date().toDateString()}`);
};

export const fetchProfile = async (): Promise<IProfile> => {
  return json('/profile');
};

export const updateProfile = async (data: IProfile): Promise<any> => {
  return post('/profile', data);
};

/* export const addRecord = async (data: ICurrencyRates): Promise<any> => {
  return post('/rates', data);
}; */

/* interface IBankCurrency {
  Cur_id?: string;
  Cur_Abbreviation: string;
  Cur_Code: string;
  Cur_Name: string;
  Cur_DateEnd: string;
} */
/*
export const fetchCurrencies = async (): Promise<ICurrency[]> => {
  try {
    const res: IBankCurrency[] = await json('/currencies');
    return res
      .filter((i: IBankCurrency) => new Date(i.Cur_DateEnd) > new Date())
      .sort((a, b) => a.Cur_Name.localeCompare(b.Cur_Name))
      .map((i: IBankCurrency) => {
        return {
          shortName: i.Cur_Abbreviation,
          code: i.Cur_Code,
          name: i.Cur_Name
        };
      });
  } catch (err) {
    return [];
  }
}; */

/* filter = (obj, keys) =>
  Object.keys(obj)
    .filter(key => keys.includes(key))
    .reduce((res, key) => (res[key] = obj[key], res), {}); */
