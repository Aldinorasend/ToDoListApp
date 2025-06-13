import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      {/* ... */}
    </div>
  );
}