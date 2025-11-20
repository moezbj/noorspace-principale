import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header title', () => {
  render(<Header onToggleSidebar={() => {}} />);
  expect(screen.getByText(/Principale Dashboard/i)).toBeInTheDocument();
});