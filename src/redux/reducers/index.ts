import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  moviesList: moviesReducer,
});

export default rootReducer;
