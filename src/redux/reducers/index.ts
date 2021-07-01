import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailsReducer from './detailsReducer';
import similarMoviesReducer from './similarReducer';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  moviesList: moviesReducer,
  details: detailsReducer,
  similar: similarMoviesReducer,
  tvShowsList: tvShowsReducer,
});

export default rootReducer;
