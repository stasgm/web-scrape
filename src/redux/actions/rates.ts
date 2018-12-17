import { actions } from '../actionTypes/actionTypesRates';
import { actionTypeEnumToString } from '@src/reducers/_rateReducer';

export const addRate = (payload: {}) => ({ type: actionTypeEnumToString(actions.ADD_RATE), payload });
export const addRates = (payload: {}) => ({ type: actionTypeEnumToString(actions.ADD_RATES), payload });
