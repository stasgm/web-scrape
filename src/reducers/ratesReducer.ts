import { IAction } from '@common/appDataStructures';
import { IRatesEntity } from '../common/rateEntity';

export { IRatesEntity };

const createEmptyRatesRecord = (): IRatesEntity => ({
  rates: []
});

export function ratesReducer(
  state = createEmptyRatesRecord(),
  action: IAction<string | null> = { type: '', payload: null }
): IRatesEntity {
  switch (action.type) {
    default:
      return state;
  }
}
