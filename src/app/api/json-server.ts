import { ICurrencyRates, IRate } from '@models';
import { json, post } from './common/http.service';

export const fetchRates = async (): Promise<ICurrencyRates[]> => {
  return json('/rates');
};

export const addRecord = async (data: any): Promise<IRate> => {
  return post('/rates', data);
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
