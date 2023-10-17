import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

test('Home component matches snapshot with modal closed', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

test('Home component matches snapshot with modal open', () => {
  const { container, getByText } = render(<Home />);
  const createTripButton = getByText('Create My Trip Now');
  fireEvent.click(createTripButton);
  expect(container).toMatchSnapshot();
});
