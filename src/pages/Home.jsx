import { useState } from 'react'
import TodoItem from '../components/TodoItem'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, { text: input, done: false }])
    setInput('')
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">To-Do Lis</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border px-4 py-2 rounded"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => toggleTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </div>
    </div>
  )
}
