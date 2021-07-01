import actionTypes from '../actions/actionTypes';

function similarReducer(similar : any = {}, action: any) {
  switch (action.type) {
    case actionTypes.LOAD_SIMILAR:
      return action.similar;
    default:
      return similar;
  }
}

export default similarReducer;
