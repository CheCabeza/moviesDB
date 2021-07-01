import axios from 'axios';
import {
  loadMovies,
  loadDetails,
  loadSimilar,
  loadTv,
} from './actionCreator';

import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given a loadRecipes function', () => {
  describe('When invoked without a title argument', () => {
    test('It should return a list of all the recipes', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadMovies()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_MOVIES,
        movies: [{ id: '12' }],
      });
    });
  });

  describe('When invoked without a title argument', () => {
    test('should dispatch LOAD_HEROES_ERROR', async () => {
      axios.mockRejectedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadMovies()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_MOVIES_ERROR',
      });
    });
  });
});

describe('Given a loadDetails function', () => {
  describe('When resolved', () => {
    test('It should return a list of details', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadDetails()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_DETAILS,
        details: [{ id: '12' }],
      });
    });
  });

  describe('When rejected', () => {
    test('should dispatch LOAD_DETAILS_ERROR', async () => {
      axios.mockRejectedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadDetails()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_DETAILS_ERROR',
      });
    });
  });
});

describe('Given a loadSimilar function', () => {
  describe('When resolved', () => {
    test('It should return a list of details', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadSimilar()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_SIMILAR,
        similar: [{ id: '12' }],
      });
    });
  });

  describe('When rejected', () => {
    test('should dispatch LOAD_SIMILAR_ERROR', async () => {
      axios.mockRejectedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadSimilar()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_SIMILAR_ERROR',
      });
    });
  });
});

describe('Given a loadTv function', () => {
  describe('When resolved', () => {
    test('It should return a list of details', async () => {
      axios.mockResolvedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadTv()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_TVSHOWS,
        tvShows: [{ id: '12' }],
      });
    });
  });

  describe('When rejected', () => {
    test('should dispatch LOAD_TVSHOWS_ERROR', async () => {
      axios.mockRejectedValue({ data: [{ id: '12' }] });
      const dispatch = jest.fn();
      await loadTv()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_TVSHOWS_ERROR',
      });
    });
  });
});
