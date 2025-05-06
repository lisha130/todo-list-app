import axios from "axios"

const API_URL = "http://localhost:5000/api/todos"

export const fetchTodos = () => axios.get(API_URL)
export const createTodo = (todo) => axios.post(API_URL, todo)
export const updateTodo = (id, updates) =>
  axios.put(`${API_URL}/${id}`, updates)
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`)
