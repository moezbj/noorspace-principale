import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import JokeGenerator from '../components/JokeGenerator';

const singleMockResponse = {
  error: false,
  category: 'Programming',
  type: 'single',
  joke: "Why do programmers prefer dark mode? Because light attracts bugs."
};

beforeEach(() => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(singleMockResponse)
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders loading state then shows a joke and allows fetching a new one', async () => {
  render(<JokeGenerator />);

  // Should show loading initially
  expect(screen.getByText(/Loading joke/i)).toBeInTheDocument();

  // Wait for the joke to appear
  await waitFor(() => expect(screen.getByText(/Why do programmers prefer dark mode/i)).toBeInTheDocument());

  // New Joke button should be present and clickable
  const newJokeButton = screen.getByRole('button', { name: /new joke/i });
  expect(newJokeButton).toBeInTheDocument();

  // Click it and ensure fetch was called again
  fireEvent.click(newJokeButton);
  expect(global.fetch).toHaveBeenCalledTimes(2);
});