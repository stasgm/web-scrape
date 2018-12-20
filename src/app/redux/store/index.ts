import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { IRootState, rootReducer } from '@redux/reducers';

export function configureStore(initialState?: IRootState): Store<IRootState> {
  const middleware = process.env.NODE_ENV !== 'production' ? [logger] : [];

  const store = <Store<IRootState>>(
    createStore(<any>rootReducer, <any>initialState, applyMiddleware(thunk, ...middleware))
  );

  // webpack HMR for reducers
  if (module.hot) {
    (<any>module).hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
