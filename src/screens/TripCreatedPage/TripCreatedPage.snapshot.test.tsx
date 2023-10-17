import { render } from '@testing-library/react';
import TripCreatedPage from './TripCreatedPage';

test('TripCreatedPage component snapshot', () => {
  const { container } = render(<TripCreatedPage />);
  expect(container).toMatchSnapshot();
});
