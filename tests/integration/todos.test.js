import { render, screen } from '@testing-library/react';
import App from '../../src/App'; // Pastikan path ini benar
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('App Integration Test', () => {
  it('renders the Todo List header', () => {
    render(<App />);
    expect(screen.getByText(/todo list/i)).toBeInTheDocument(); // Sesuaikan dengan teks di komponen Anda
  });


test('adds a new todo', () => {
  render(<Home />);
  const input = screen.getByPlaceholderText(/add todo/i);
  fireEvent.change(input, { target: { value: 'Belajar Jest' } });
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/belajar jest/i)).toBeInTheDocument();
  });
});