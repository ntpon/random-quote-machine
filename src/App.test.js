import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('changes the quote and its source when asked for another quote', () => {
  render(<App />);
  const readQuote = () => screen.getByRole('heading').textContent;

  const firstQuote = readQuote();
  const firstSource = screen.getByRole('link', { name: 'Source' }).href;
  expect(firstSource).toMatch(/^https:/);

  fireEvent.click(screen.getByRole('button', { name: 'Random Quote' }));
  expect(readQuote()).not.toBe(firstQuote);
  expect(screen.getByRole('link', { name: 'Source' }).href).toMatch(/^https:/);
  expect(screen.getByRole('link', { name: 'Source' }).href).not.toBe(firstSource);
});

test('includes the displayed quote and author in the share link', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: 'twitter' });
  const text = new URL(link.href).searchParams.get('text');
  expect(text).toContain(screen.getByRole('heading').textContent);
  expect(text).toContain('Kobe Bryant');
});
