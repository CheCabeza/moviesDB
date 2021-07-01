import similarReducer from './similarReducer';
import actionTypes from '../actions/actionTypes';

describe('Given similarReducer function ', () => {
  test('when resolved with LOAD_SIMILAR, then should return similar data', () => {
    expect(
      similarReducer({}, {
        type: actionTypes.LOAD_SIMILAR,
        similar: { title: 'bambi' },
      }),
    ).toEqual({ title: 'bambi' });
  });
});
