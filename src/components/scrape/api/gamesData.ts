export {}
// import { IGameData } from '@src/common/';

// const baseURL = 'https://wrapapi.com/use/damned_god/rutor/games/0.0.3';
// const wrapAPIKey = 'OM3kz0KsWSPDTfjkp0hwH4XlInvwV7RJ';

// export const fetchData = async (): Promise<IGameData> => {
//   const response = await fetch(baseURL, {
//     method: 'post',
//     headers: {
//       // tslint:disable-next-line:object-literal-key-quotes
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ wrapAPIKey })
//   });

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const res = await response.json();
//   if (!res.success) {
//     throw new Error(res.messages);
//   }

//   return mapDataToState(res);
// };

// const mapDataToState = (res: any) => {
//   return res.data;
// };
