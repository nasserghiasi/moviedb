import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

test('header links', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByText(/The MovieDB/i)).toBeInTheDocument();
  expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  expect(screen.getByText(/Watch List/i)).toBeInTheDocument();
});
