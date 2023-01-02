import React from 'react';

import { render } from '@testing-library/react';

import Index from '../../pages/index';

describe('/index', () => {
  it('should render', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });
});
