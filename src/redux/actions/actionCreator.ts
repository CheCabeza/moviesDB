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

export function loadDetails(movieId: string, type: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      dispatch({
        type: actionTypes.LOAD_DETAILS,
        details: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_MOVIEDETAILS_ERROR',
      });
    }
  };
}

export function loadSimilar(movieId: string, type: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
      dispatch({
        type: actionTypes.LOAD_SIMILAR,
        similar: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_SIMILAR_ERROR',
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
