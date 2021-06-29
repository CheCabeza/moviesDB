import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

export function loadMovies() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios('https://api.themoviedb.org/3/trending/movie/week?api_key=fd4391ab9e4ed087a42c2c2e4329b1d4');
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        movies: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_MOVIES_ERROR',
      });
    }
  };
}

export function loadTv() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios('https://api.themoviedb.org/3/trending/tv/week?api_key=fd4391ab9e4ed087a42c2c2e4329b1d4');
      dispatch({
        type: actionTypes.LOAD_TVSHOWS,
        tvShows: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_TVSHOWS_ERROR',
      });
    }
  };
}
