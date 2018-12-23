import { ActionType, getType } from 'typesafe-actions';
import { RateState } from '@models';
import * as rates from '../actions';

export type RatesAction = ActionType<typeof rates>;

const initialState: RateState = {
  rates: []
};

export const ratesReducer = (state: RateState = initialState, action: RatesAction): RateState => {
  switch (action.type) {
    case getType(rates.ratesActions.addRate): {
      return state;
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
