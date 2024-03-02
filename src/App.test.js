import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn more about Cosmoglia link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/About Cosmoglia!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a visible logo', () => {
  const { getByAltText } = render(<App />);
  const logo = getByAltText(/logo/i);
  expect(logo).toBeVisible();
});
