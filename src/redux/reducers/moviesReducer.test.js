import moviesReducer from './moviesReducer';
import actionTypes from '../actions/actionTypes';

describe('Given moviesReducer function ', () => {
  test('when resolved with LOAD_MOVIES, then should return movies data', () => {
    expect(
      moviesReducer({}, {
        type: actionTypes.LOAD_MOVIES,
        movies: { title: 'bambi' },
      }),
    ).toEqual({ title: 'bambi' });
  });
});
