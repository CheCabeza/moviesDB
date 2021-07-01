import tvShowsReducer from './tvShowsReducer';
import actionTypes from '../actions/actionTypes';

describe('Given tvShowsReducer function ', () => {
  test('when resolved with LOAD_TVSHOWS, then should return similar data', () => {
    expect(
      tvShowsReducer({}, {
        type: actionTypes.LOAD_TVSHOWS,
        tvShows: { title: 'bambi' },
      }),
    ).toEqual({ title: 'bambi' });
  });
});
