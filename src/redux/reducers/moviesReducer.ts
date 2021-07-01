import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';

function moviesReducer(movies = {}, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      return action.movies;
    default:
      return movies;
  }
}

export default moviesReducer;
