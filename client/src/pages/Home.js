import { useEffect, useState } from "react"
import TodoForm from "../components/TodoForm"
import TodoItem from "../components/TodoItem"
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todoApi"

export default function Home() {
  const [todos, setTodos] = useState([])

  const loadTodos = async () => {
    const { data } = await fetchTodos()
    setTodos(data)
  }

  useEffect(() => {
    loadTodos()
  }, [])

  const handleAdd = async (todo) => {
    const { data } = await createTodo(todo)
    setTodos([data, ...todos])
  }

  const handleToggle = async (id, completed) => {
    const { data } = await updateTodo(id, { completed })
    setTodos(todos.map((t) => (t._id === id ? data : t)))
  }

  const handleDelete = async (id) => {
    await deleteTodo(id)
    setTodos(todos.filter((t) => t._id !== id))
  }

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      })
      const updated = await res.json()
      setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)))
    } catch (err) {
      console.error("Failed to update todo:", err)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        📝 Alisha's Todo List
      </h1>
      <div className="mb-4">
        <p className="text-center text-gray-500">
          Keep track of your tasks and stay organized!
        </p>
      </div>
      <div className="mb-4">
        <TodoForm onAdd={handleAdd} />
      </div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500v">No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  )
}
