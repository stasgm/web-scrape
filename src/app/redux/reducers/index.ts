// import { combineReducers } from 'redux';
import { IRootState } from '@models';
// import {} from './rates';

// export { IRootState, TodoState };

// // NOTE: current type definition of Reducer in 'redux-actions' module
// // doesn't go well with redux@4
// export const rootReducer = combineReducers<IRootState>({
//   todos: <any>todoReducer
// });

export { IRootState };

export * from './root-reducer';
