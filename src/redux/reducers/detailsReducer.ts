import actionTypes from '../actions/actionTypes';

function detailsReducer(details : any = {}, action: any) {
  switch (action.type) {
    case actionTypes.LOAD_DETAILS:
      return action.details;
    default:
      return details;
  }
}

export default detailsReducer;
