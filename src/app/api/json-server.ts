import { RateState } from '@models';

const baseURL = 'http://localhost:4000/rates/';

export const fetchData = async (): Promise<RateState[]> => {
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  };

  const response = await fetch(baseURL, params);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const res = await response.json();

  return mapToState(res);
};

const mapToState = (res: any) => {
  return res;
};

export const addRecord = (data: string) => {
  const params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: data,
    method: 'POST'
  };

  fetch(baseURL, params)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export const deleteRecord = (data: string, id: number) => {
  const params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: data,
    method: 'POST'
  };

  fetch(baseURL, params)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export const deleteRecords = () => {
  const params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: '',
    method: 'POST'
  };

  fetch(baseURL, params)
    .then((res) => res.json())
    .then((res) => console.log(res));
};
