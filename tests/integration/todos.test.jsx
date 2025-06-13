import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from '../../src/App'

test('renders todo list', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  
  // Verifikasi elemen dengan text
  expect(screen.getByText(/to-do list/i)).toBeInTheDocument()
  
  // Verifikasi input field ada
  expect(screen.getByPlaceholderText(/add new task/i)).toBeInTheDocument()
})