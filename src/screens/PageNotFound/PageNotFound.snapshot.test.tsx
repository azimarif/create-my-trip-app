import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

test('PageNotFound component snapshot', () => {
  const { container } = render(<PageNotFound />);
  expect(container).toMatchSnapshot();
});
