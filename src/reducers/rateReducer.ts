import { IAction } from '@common/appDataStructures';
import { IRateEntity } from '../common/rateEntity';
import { actions } from '../actionTypes/actionTypesRates';

export { IRateEntity };

const createEmptyRateRecord = (): IRateEntity => ({
  id: -1,
  name: '',
  buy: 0,
  sell: 0
});

export const actionTypeEnumToString = (action: any): any =>
  typeof action.type === 'number' && actions[action.type]
    ? {
        type: actions[action.type],
        payload: action.payload
      }
    : action;

export function rateReducer(
  state = createEmptyRateRecord(),
  action: IAction<string | null> = { type: '', payload: null }
): IRateEntity {
  switch (action.type) {
    case actionTypeEnumToString(actions.ADD_RATE):
      console.log('add');
      return state;
    default:
      return state;
  }
}
