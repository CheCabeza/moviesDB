import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
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

  test('Test click event', () => {
    const setTvIconColor = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const button = getByTestId(container, 'ImFilm');
    fireEvent.click(button);
    expect(setTvIconColor).not.toHaveBeenCalled();
  });

  test('Test click event', () => {
    const setMovieIconColor = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const button = getByTestId(container, 'ImTv');
    fireEvent.click(button);
    expect(setMovieIconColor).not.toHaveBeenCalled();
  });
});
