# Full-Stack Todo App (React + Node.js + Express + MongoDB)

A simple and functional full-stack Todo application built with:

- **Frontend**: React (Vite or Create React App)
- **Backend**: Node.js + Express + MongoDB
- **API**: RESTful endpoints for creating, updating, deleting, and retrieving todos

---

## 📁 Project Structure

```
Todo-list/
│
├── frontend/           # React application
│   └── src/
│       ├── components/
│       ├── App.jsx
│       └── ...
│
├── backend/            # Express + MongoDB server
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── todoModel.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── controllers/
│   │   └── todoController.js
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Features

- Add, edit, delete, and mark todos as complete
- View detailed information (description, due date, tags, priority)
- Toggle between edit/view mode per todo item
- Persistent storage using MongoDB
- Modern UI using Tailwind CSS (optional)

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 🔗 API Endpoints

- `GET /api/todos` – Get all todos
- `POST /api/todos` – Create a new todo
- `PUT /api/todos/:id` – Update a todo
- `DELETE /api/todos/:id` – Delete a todo

---

## ✅ Todo Model (Mongoose)

```js
{
  title: String,
  completed: Boolean,
  description: String,
  dueDate: Date,
  priority: 'low' | 'medium' | 'high',
  tags: [String]
}
```

---

## 📝 License

This project is licensed under the MIT License.
