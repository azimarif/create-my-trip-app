import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown component matches snapshot', () => {
  const items = ['Option 1', 'Option 2', 'Option 3'];
  const defaultValue = 'Select an option';

  const { container } = render(
    <Dropdown
      items={items}
      defaultValue={defaultValue}
      onChangeHandler={jest.fn()}
    />,
  );

  expect(container).toMatchSnapshot();
});
