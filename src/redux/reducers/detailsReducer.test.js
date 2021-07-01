import detailsReducer from './detailsReducer';
import actionTypes from '../actions/actionTypes';

describe('Given moviesReducer function ', () => {
  test('when resolved with FILTER_FLATS_FACE, then should return filteredFlats data', () => {
    expect(
      detailsReducer({}, {
        type: actionTypes.LOAD_DETAILS,
        details: { title: 'bambi' },
      }),
    ).toEqual({ title: 'bambi' });
  });
});
