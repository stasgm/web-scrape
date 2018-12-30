import { ActionType, getType } from 'typesafe-actions';
import * as rates from '../actions/rates';
import { RateState } from '@models';
import { Reducer } from 'redux';

export type RatesAction = ActionType<typeof rates>;

const initialState: RateState = {
  rates: [],
  hasErrored: false,
  isLoading: false
};

export const ratesReducer: Reducer<RateState, RatesAction> = (
  state = initialState,
  action
): RateState => {
  switch (action.type) {
    case getType(rates.ratesActions.addRate): {
      console.log(action.payload);

      return state;
    }
    case getType(rates.ratesActions.addRateRequest.request):
    case getType(rates.ratesActions.fetchRates.request): {
      return { ...state, isLoading: true, hasErrored: false };
    }
    case getType(rates.ratesActions.fetchRates.success): {
      return { ...state, rates: action.payload, isLoading: false, hasErrored: false };
    }
    case getType(rates.ratesActions.addRateRequest.success): {
      return {
        ...state,
        rates: [...state.rates, action.payload],
        isLoading: false,
        hasErrored: false
      };
    }
    case getType(rates.ratesActions.addRateRequest.failure):
    case getType(rates.ratesActions.fetchRates.failure): {
      return { ...state, isLoading: false, hasErrored: true };
    }
    default:
      return state;
  }
};

/*  ratesReducer: (state = [], action) => {
    switch (action.type) {
      case getType(articlesActions.addArticle): {
        return {
          ...state,
          list: [action.payload, ...state.list]
        };
      }
      case getType(articlesActions.editArticle): {
        return {
          ...state,
          list: state.list.map(itm => (itm.key === action.payload.key ? action.payload : itm))
        };
      }
      case getType(articlesActions.deleteArticle): {
        return {
          ...state,
          list: state.list.filter((itm: IArticle) => itm.key !== action.payload.key)
        };
      }
      case getType(articlesActions.deleteArticles): {
        return {
          ...state,
          list: []
        };
      }
      case getType(articlesActions.loadArticles.request): {
        return {
          ...state,
          isLoading: true
        };
      }
      case getType(articlesActions.loadArticles.success): {
        return {
          ...state,
          list: action.payload,
          isLoading: false
        };
      }
      case getType(articlesActions.saveArticles.request): {
        return {
          ...state,
          isLoading: true
        };
      }
      case getType(articlesActions.saveArticles.success): {
        return {
          ...state,
          isLoading: false
        };
      }
      case getType(articlesActions.saveArticles.failure):
      case getType(articlesActions.loadArticles.failure):
      case getType(articlesActions.addDBArticle.failure):
      case getType(articlesActions.updateDBArticle.failure):
      case getType(articlesActions.deleteDBArticle.failure): {
        return {
          ...state,
          isLoading: false,
          hasErrored: true
        };
      }
      default:
        return state;
    }
  } */
