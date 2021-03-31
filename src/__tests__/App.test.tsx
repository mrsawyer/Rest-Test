import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react app', () => {
  render(<App />);
  const headerElement = screen.getByText(/bench test/i);
  expect(headerElement).toBeInTheDocument();
});
