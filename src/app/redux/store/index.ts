import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'app/middleware';
import { IRootState, rootReducer } from '@redux/reducers';

export function configureStore(initialState?: IRootState): Store<IRootState> {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = <Store<IRootState>>createStore(<any>rootReducer, <any>initialState, middleware);

  // webpack HMR for reducers
  if ((module).hot) {
    (<any>module).hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
