import { actions } from '../actionTypes/actionTypesRates';
import { actionTypeEnumToString } from '@src/reducers/rateReducer';

export const addRate = () => actionTypeEnumToString(actions.ADD_RATE);
