import { ActionType, getType } from 'typesafe-actions';
import * as rates from '../actions/rates';
import { RateState } from '@models';
import { Reducer } from 'redux';

export type RatesAction = ActionType<typeof rates>;

const initialState: RateState = {
  banks: [],
  currencies: [],
  rates: [],
  hasErrored: false,
  isLoading: false
};

export const ratesReducer: Reducer<RateState, RatesAction> = (
  state = initialState,
  action
): RateState => {
  switch (action.type) {
    case getType(rates.ratesActions.loadCurrentRates.request):
    case getType(rates.ratesActions.loadCurrencies.request):
    case getType(rates.ratesActions.loadRates.request):
    case getType(rates.ratesActions.loadBanks.request): {
      return { ...state, isLoading: true, hasErrored: false };
    }
    case getType(rates.ratesActions.loadBanks.success): {
      return { ...state, banks: action.payload, isLoading: false, hasErrored: false };
    }
    case getType(rates.ratesActions.loadCurrencies.success): {
      return { ...state, currencies: action.payload, isLoading: false, hasErrored: false };
    }
    case getType(rates.ratesActions.loadCurrentRates.success): {
      return { ...state, rates: action.payload, isLoading: false, hasErrored: false };
    }
    case getType(rates.ratesActions.loadRates.success): {
      return { ...state, rates: action.payload, isLoading: false, hasErrored: false };
    }
    case getType(rates.ratesActions.loadCurrencies.failure):
    case getType(rates.ratesActions.loadBanks.failure):
    case getType(rates.ratesActions.loadRates.failure):
    case getType(rates.ratesActions.loadCurrentRates.failure): {
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
