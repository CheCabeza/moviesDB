import actionTypes from '../actions/actionTypes';

function similarMoviesReducer(similarMovies : any = {}, action: any) {
  switch (action.type) {
    case actionTypes.LOAD_SIMILARMOVIES:
      return action.similarMovies;
    default:
      return similarMovies;
  }
}

export default similarMoviesReducer;
