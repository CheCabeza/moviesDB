import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

export function loadMovies() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
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

export function loadMovieDetails(movieId: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      dispatch({
        type: actionTypes.LOAD_MOVIEDETAILS,
        movie: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_MOVIEDETAILS_ERROR',
      });
    }
  };
}

export function loadTv() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`);
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
