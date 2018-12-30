import { ICurrencyRates, ICurrency, IOptions } from '@models';
import { json, post } from './common/http.service';

export const fetchRates = async (): Promise<ICurrencyRates[]> => {
  return json('/rates');
};

export const fetchProfile = async (): Promise<IOptions> => {
  return json('/profile');
};

export const updateProfile = async (data: IOptions): Promise<any> => {
  return post('/profile', data);
};

export const addRecord = async (data: ICurrencyRates): Promise<any> => {
  return post('/rates', data);
};

interface IBankCurrency {
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

// export const addRecord = (data: string) => {
//   const params = {
//     headers: {
//       'content-type': 'application/json; charset=UTF-8'
//     },
//     body: data,
//     method: 'POST'
//   };

//   fetch(baseURL, params)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// export const deleteRecord = (data: string, id: number) => {
//   const params = {
//     headers: {
//       'content-type': 'application/json; charset=UTF-8'
//     },
//     body: data,
//     method: 'POST'
//   };

//   fetch(baseURL, params)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// export const deleteRecords = () => {
//   const params = {
//     headers: {
//       'content-type': 'application/json; charset=UTF-8'
//     },
//     body: '',
//     method: 'POST'
//   };

//   fetch(baseURL, params)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };
