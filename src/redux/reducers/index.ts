import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  moviesList: moviesReducer,
  tvShowsList: tvShowsReducer,
});

export default rootReducer;
