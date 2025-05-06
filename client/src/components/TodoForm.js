import { useState } from "react"

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState("medium")
  const [tags, setTags] = useState("")
  const [showExtra, setShowExtra] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim() || !dueDate) return

    onAdd({
      title,
      description,
      dueDate,
      priority,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    })

    // Reset form
    setTitle("")
    setDescription("")
    setDueDate("")
    setPriority("medium")
    setTags("")
    setShowExtra(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 border rounded-md shadow bg-gray-50"
    >
      <input
        className="p-2 border rounded-md"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <button
        type="button"
        onClick={() => setShowExtra(!showExtra)}
        className="text-sm text-blue-600 hover:underline self-start"
      >
        {showExtra ? "Hide extra fields" : "Add extra fields"}
      </button>

      {showExtra && (
        <>
          <textarea
            className="p-2 border rounded-md"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="date"
            className="p-2 border rounded-md"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <select
            className="p-2 border rounded-md"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <input
            className="p-2 border rounded-md"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  )
}
