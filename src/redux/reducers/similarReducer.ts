import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';

function similarReducer(similar = {}, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_SIMILAR:
      return action.similar;
    default:
      return similar;
  }
}

export default similarReducer;
