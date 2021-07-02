import { Provider } from 'react-redux';
import React from 'react';
import { render } from '@testing-library/react';
import store from '../../redux/store/index';

import MoviesList from './MoviesList';

describe('Given a Details component', () => {
  test('Should render the MoviesList component', () => {
    const movieComponent = render(
      <Provider store={store({})}>
        <MoviesList />
      </Provider>,

    );
    expect(movieComponent).toMatchSnapshot();
  });
});
