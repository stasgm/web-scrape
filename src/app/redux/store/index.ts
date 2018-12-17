import { Store, createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { logger } from 'app/middleware';
import logger from 'redux-logger';
import { IRootState, rootReducer } from '@redux/reducers';

export function configureStore(initialState?: IRootState): Store<IRootState> {
  const middleware = (process.env.NODE_ENV !== 'production') ? [] : [logger];
    // middleware = composeWithDevTools(middleware);

  const store = <Store<IRootState>>createStore(<any>rootReducer, <any>initialState, applyMiddleware(thunk, ...middleware));

  // webpack HMR for reducers
  if ((module).hot) {
    (<any>module).hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
