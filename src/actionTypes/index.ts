import { actions } from './actionTypesRates';

export const actionTypeEnumToString = (action: any): any =>
  typeof action.type === 'number' && actions[action.type]
    ? {
        type: actions[action.type],
        payload: action.payload
      }
    : action;
