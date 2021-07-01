import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';

function detailsReducer(details = {}, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_DETAILS:
      return action.details;
    default:
      return details;
  }
}

export default detailsReducer;
