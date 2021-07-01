import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';

function tvShowsReducer(tvShows = {}, action: AnyAction) {
  switch (action.type) {
    case actionTypes.LOAD_TVSHOWS:
      return action.tvShows;
    default:
      return tvShows;
  }
}

export default tvShowsReducer;
