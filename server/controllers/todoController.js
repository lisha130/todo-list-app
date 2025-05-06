const Todo = require("../models/todoModel")

const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, priority, tags } = req.body

    const todo = new Todo({
      title,
      description,
      dueDate,
      priority,
      tags,
    })

    const saved = await todo.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json(todos)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(todo)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(204).end()
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
}
