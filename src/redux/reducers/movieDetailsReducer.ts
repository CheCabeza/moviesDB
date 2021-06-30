import actionTypes from '../actions/actionTypes';

function movieDetailsReducer(movie : any = {}, action: any) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIEDETAILS:
      return action.movie;
    default:
      return movie;
  }
}

export default movieDetailsReducer;
