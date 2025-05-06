import { useState } from "react"

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [showDetails, setShowDetails] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({ ...todo })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    onUpdate(todo._id, formData)
    setEditMode(false)
  }

  return (
    <div className="bg-white p-3 shadow rounded-md mb-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo._id, !todo.completed)}
          />
          <span
            className={`${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.title}
          </span>
        </div>
        <div className="flex gap-2 text-sm">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showDetails ? "Hide" : "View"}
          </button>
          <button
            onClick={() => setEditMode(!editMode)}
            className="text-yellow-500 hover:text-yellow-600"
          >
            {editMode ? "Cancel" : "Edit"}
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      {showDetails && !editMode && (
        <div className="mt-2 text-sm text-gray-700">
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <p>
            <strong>Due:</strong> {new Date(todo.dueDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Priority:</strong> {todo.priority}
          </p>
          <p>
            <strong>Tags:</strong> {todo.tags?.join(", ") || "None"}
          </p>
        </div>
      )}

      {editMode && (
        <div className="mt-3 space-y-2 text-sm">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Title"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Description"
          />
          <input
            name="dueDate"
            type="date"
            value={formData.dueDate?.slice(0, 10)}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            name="tags"
            value={formData.tags?.join(", ")}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                tags: e.target.value.split(",").map((tag) => tag.trim()),
              }))
            }
            className="w-full p-2 border rounded"
            placeholder="Tags (comma separated)"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      )}
    </div>
  )
}
