import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Given a Details component', () => {
  test('Should render the Header component', () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });
});
