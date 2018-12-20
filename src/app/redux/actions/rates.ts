import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';
import { IRateModel, ICurrency, IRate, ICurrencyRate } from '@models';

export const ratesActions = {
  addRate: createAction('ADD_RATE', resolve => {
    return (rate: IRateModel) => resolve(rate);
  }),
  editArticle: createAction('EDIT_RATE', resolve => {
    return (article: IRate) => resolve(article);
  }),
  deleteArticle: createAction('DELETE_RATE', resolve => {
    return (article: IArticle) => resolve(article);
  }),
  deleteArticles: createAction('DELETE_RATES', resolve => {
    return () => resolve();
  }),
  loadArticles: createAsyncAction('REQUEST_LOAD_ARTICLES', 'REQUEST_LOAD_SUCCEEDED', 'REQUEST_LOAD_FAILED')<
    void,
    ICurrencyRate,
    Error
  >(),
  saveArticles: createAsyncAction('REQUEST_SAVE_ARTICLES', 'REQUEST_SAVE_SUCCEEDED', 'REQUEST_SAVE_FAILED')<
    void,
    void,
    Error
  >(),
  addDBArticle: createAsyncAction('REQUEST_ADD_ARTICLE', 'REQUEST_ADD_SUCCEEDED', 'REQUEST_ADD_FAILED')<
    void,
    IArticle,
    Error
  >(),
  updateDBArticle: createAsyncAction('REQUEST_UPDATE_ARTICLE', 'REQUEST_UPDATE_SUCCEEDED', 'REQUEST_UPDATE_FAILED')<
    void,
    IArticle,
    Error
  >(),
  deleteDBArticle: createAsyncAction('REQUEST_DELETE_ARTICLE', 'REQUEST_DELETE_SUCCEEDED', 'REQUEST_DELETE_FAILED')<
    void,
    IArticle,
    Error
  >()
};

export type TArticlesActions = ActionType<typeof articlesActions>;

