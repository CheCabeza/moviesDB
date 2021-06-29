import actionTypes from '../actions/actionTypes';

function tvShowsReducer(tvShows : any = {}, action: any) {
  switch (action.type) {
    case actionTypes.LOAD_TVSHOWS:
      return action.tvShows;
    default:
      return tvShows;
  }
}

export default tvShowsReducer;
