import { Provider } from 'react-redux';
import React from 'react';
import { render } from '@testing-library/react';
import store from '../../redux/store/index';

import TvList from './tvList';

describe('Given a Details component', () => {
  test('Should render the tvList component', () => {
    const tvListComponent = render(
      <Provider store={store({})}>
        <TvList />
      </Provider>,

    );
    expect(tvListComponent).toMatchSnapshot();
  });
});
