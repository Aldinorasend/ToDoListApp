import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../src/test-utils';
import App from '../../src/App';

describe('Todo App Integration Test', () => {
  it('renders homepage correctly', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    renderWithRouter(<App />);
    const input = screen.getByPlaceholderText(/add new task/i);
    const button = screen.getByText(/add/i);

    // Tambahkan todo
    fireEvent.change(input, { target: { value: 'Belajar Testing' } });
    fireEvent.click(button);

    // Verifikasi todo muncul
    expect(screen.getByText(/belajar testing/i)).toBeInTheDocument();
  });

  it('toggles and deletes todo', () => {
    renderWithRouter(<App />);
    const input = screen.getByPlaceholderText(/add new task/i);
    const addButton = screen.getByText(/add/i);

    // Tambahkan todo
    fireEvent.change(input, { target: { value: 'Todo to delete' } });
    fireEvent.click(addButton);

    // Toggle todo
    const toggleButton = screen.getByRole('checkbox');
    fireEvent.click(toggleButton);
    expect(toggleButton).toBeChecked();

    // Hapus todo
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/todo to delete/i)).not.toBeInTheDocument();
  });
});