import { IAction } from '@common/appDataStructures';

export interface IAppReducerState {
  name?: string;
}

const initialState: IAppReducerState = {};

export function appReducer(
  state: IAppReducerState = initialState,
  action: IAction<string | null> = { type: '', payload: null }
): IAppReducerState {
  switch (action.type) {
    default:
      return state;
  }
}
