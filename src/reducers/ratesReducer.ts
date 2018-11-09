import { IAction } from '@common/appDataStructures';
import { IRatesEntity } from '../common/rateEntity';
import { actions } from '@src/actionTypes/actionTypesRates';
import { actionTypeEnumToString } from '@src/actionTypes/';

export { IRatesEntity };

const createEmptyRatesRecord = (): IRatesEntity => ({
  list: []
});

export function ratesReducer(
  state = createEmptyRatesRecord(),
  action: IAction<IRatesEntity> = { type: '', payload: createEmptyRatesRecord() }
): IRatesEntity {
  switch (action.type) {
    case actionTypeEnumToString(actions.FETCH_RATES):
      console.log('add');
      return handleFetchRatesCompleted(state, action.payload)
    default:
      return state;
  }
}

const handleFetchRatesCompleted = (state: IRatesEntity, payload: IRatesEntity) => {
  return payload;
};
