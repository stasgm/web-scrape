import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { ICurrency, IBank, IRate } from '@models';
import { entityAPI } from 'app/api';

export const ratesActions = {
  loadCurrentRates: createAsyncAction(
    'REQUEST_LOAD_CURRENTRATES',
    'REQUEST_LOAD_CURRENTRATES_SUCCEEDED',
    'REQUEST_LOAD_CURRENTRATES_FAILED'
  )<void, IRate[], Error>(),
  loadRates: createAsyncAction(
    'REQUEST_LOAD_RATES ',
    'REQUEST_LOAD_RATES_SUCCEEDED',
    'REQUEST_LOAD_RATES_FAILED'
  )<void, IRate[], Error>(),
  loadBanks: createAsyncAction(
    'REQUEST_LOAD_BANKS ',
    'REQUEST_LOAD_BANKS_SUCCEEDED',
    'REQUEST_LOAD_BANKS_FAILED'
  )<void, IBank[], Error>(),
  loadCurrencies: createAsyncAction(
    'REQUEST_LOAD_CURRENCIES',
    'REQUEST_LOAD_CURRENCIES_SUCCEEDED',
    'REQUEST_LOAD_CURRENCIES_FAILED'
  )<void, ICurrency[], Error>()
};

// Асинхронные запросы

export const fetchBanks = () => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.loadBanks.request());
    try {
      const res = await entityAPI.fetchBanks();
      dispatch(ratesActions.loadBanks.success(res));
    } catch (err) {
      dispatch(ratesActions.loadBanks.failure(err));
    }
  };
};

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.loadCurrencies.request());
    try {
      const res = await entityAPI.fetchCurrencies();
      console.log(res);

      dispatch(ratesActions.loadCurrencies.success(res));
    } catch (err) {
      dispatch(ratesActions.loadCurrencies.failure(err));
    }
  };
};

export const fetchRates = () => {
  return async (dispatch: Dispatch) => {
    dispatch(ratesActions.loadRates.request());
    try {
      const res = await entityAPI.fetchRates(new Date());
      dispatch(ratesActions.loadRates.success(res));
    } catch (err) {
      dispatch(ratesActions.loadRates.failure(err));
    }
  };
};
