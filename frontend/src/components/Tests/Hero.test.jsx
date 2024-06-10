import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero'; // Adjust the path as necessary
import { HERO_CONTENT } from '../../constants'; // Adjust the path as necessary

test('Name Displaying on the screen', () => {
  render(<Hero />);
  const textElement = screen.getByTestId('hero-content');
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveTextContent(HERO_CONTENT); // Additional check for text content
});

test('Name header', () => {
  render(<Hero />);
  const textElement = screen.getByTestId('hero-name');
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveTextContent('Yasindu Rathnayaka'); // Check for the correct name
});
