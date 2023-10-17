import { render } from '@testing-library/react';
import Login from './Login';

test('Login component snapshot', () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});
