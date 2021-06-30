import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  moviesList: moviesReducer,
  movieDetails: movieDetailsReducer,
  tvShowsList: tvShowsReducer,
});

export default rootReducer;
