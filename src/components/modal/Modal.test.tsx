import { Provider } from 'react-redux';
import React from 'react';
import { render } from '@testing-library/react';
import store from '../../redux/store/index';

import Modal from './Modal';

describe('Given a Details component', () => {
  test('Should render the Modal component', () => {
    const modalComponent = render(
      <Provider store={store({})}>
        <Modal open onClose={() => jest.fn} movieId="213" type="movie" />
      </Provider>,

    );
    expect(modalComponent).toMatchSnapshot();
  });
});
