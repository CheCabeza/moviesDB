import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Stars from './Stars';

describe('Given a Details component', () => {
  test('Should render when passing value {0} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={1} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });
  test('Should render when passing value {1} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={1} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });

  test('Should render when passing value {3} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={3} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });

  test('Should render when passing value {5} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={5} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });

  test('Should render when passing value {7} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={7} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });

  test('Should render when passing value {8} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={8} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });

  test('Should render when passing value {10} as props ', () => {
    const header = render(
      <BrowserRouter>
        <Stars votes={10} />
      </BrowserRouter>,

    );
    expect(header).toMatchSnapshot();
  });
});
