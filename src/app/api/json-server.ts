import { ICurrencyRates, ICurrency, IProfile } from '@models';
import { json, post } from './common/http.service';

export const fetchRates = async (): Promise<ICurrencyRates[]> => {
  return json('/rates');
};

export const fetchProfile = async (): Promise<IProfile> => {
  return json('/profile');
};

export const updateProfile = async (data: IProfile): Promise<any> => {
  return post('/profile', data);
};

export const addRecord = async (data: ICurrencyRates): Promise<any> => {
  return post('/rates', data);
};

interface IBankCurrency {
  Cur_id?: string;
  Cur_Abbreviation: string;
  Cur_Code: string;
  Cur_Name: string;
  Cur_DateEnd: string;
}

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
};
