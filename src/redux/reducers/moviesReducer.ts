import actionTypes from '../actions/actionTypes';

function moviesReducer(moviesList = {}, action: object | any) {
  if (action.type === actionTypes.LOAD_MOVIES) {
    return action.movies;
  }
  return moviesList;
}

export default moviesReducer;
