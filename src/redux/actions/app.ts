import * as appActions from '../actionTypes/app';

export function init() {
  return (dispatch: any, state: any) => {
    // get initial data
    dispatch({
      type: appActions.GET_INITIAL_DATA,
      payload: null
    });
  };
}
