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

export function loadMovieDetails(movieId: string, type: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
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

export function loadSimilarMovies(movieId: string, type: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
      dispatch({
        type: actionTypes.LOAD_SIMILARMOVIES,
        similarMovies: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_SIMILARMOVIES_ERROR',
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
