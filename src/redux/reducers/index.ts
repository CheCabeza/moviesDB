import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import similarMoviesReducer from './similarMoviesReducer';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  moviesList: moviesReducer,
  movieDetails: movieDetailsReducer,
  similarMoviesList: similarMoviesReducer,
  tvShowsList: tvShowsReducer,
});

export default rootReducer;
