import { ITodoModel } from 'app/models';

export interface IRootState {
  todos: TodoState;
  router?: any;
}

export type TodoState = ITodoModel[];
