// tests/integration/todos.test.js
import { render, screen } from '@testing-library/react'
import TodoItem from '../../src/components/TodoItem'
import { describe, it, expect } from 'vitest'

describe('TodoItem component', () => {
  it('should render the correct title', () => {
    render(<TodoItem title="Belajar React" />)

    expect(screen.getByText('Belajar Laravel')).toBeInTheDocument()
  })
})
