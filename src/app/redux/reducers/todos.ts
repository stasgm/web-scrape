import { handleActions } from 'redux-actions';
import { TodoState } from './state';
import { ActionTypes } from '@redux/actions/todos';
import { ITodoModel } from '@models';

const initialState: TodoState = [
  {
    id: 1,
    text: 'Use Redux',
    completed: false
  }
];

export const todoReducer = handleActions<TodoState, ITodoModel>(
  {
    [ActionTypes.Type.ADD_TODO]: (state, action) => {
      if (action.payload && action.payload.text) {
        return [
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            completed: false,
            text: action.payload.text
          },
          ...state
        ];
      }
      return state;
    },
    [ActionTypes.Type.DELETE_TODO]: (state, action) => {
      return state.filter((todo) => todo.id !== (<any>action.payload));
    },
    [ActionTypes.Type.EDIT_TODO]: (state, action) => {
      return state.map((todo) => {
        if (!todo || !action || !action.payload) {
          return todo;
        }
        return (todo.id || 0) === action.payload.id ? { ...todo, text: action.payload.text } : todo;
      });
    },
    [ActionTypes.Type.COMPLETE_TODO]: (state, action) => {
      return state.map((todo) =>
        todo.id === (<any>action.payload) ? { ...todo, completed: !todo.completed } : todo
      );
    },
    [ActionTypes.Type.COMPLETE_ALL]: (state, action) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    [ActionTypes.Type.CLEAR_COMPLETED]: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    }
  },
  initialState
);
