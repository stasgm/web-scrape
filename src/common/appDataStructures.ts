export interface IAction<T> {
  type: string;
  payload: T;
  error?: any;
}
