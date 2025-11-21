import React from 'react';
import { render, screen } from '@testing-library/react';
import PrincipaleDashboard from '../pages/PrincipaleDashboard';

test('renders Principale Dashboard overview title', () => {
  render(<PrincipaleDashboard />);
  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
});