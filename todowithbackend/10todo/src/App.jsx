import { useEffect, useState } from 'react';
import { ContextProvider } from './Context/TodoContext';
import { AuthProvider, useAuth } from './Context/AuthContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const { token, logout } = useAuth();

  // Add authorization header to all axios requests
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // ✅ Add todo
  function addTodo(todo) {
    axios.post('http://localhost:3000/api/todos/', todo)
      .then((res) => {
        setTodos((prev) => [res.data, ...prev]);
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        if (error.response?.status === 401) {
          logout();
        }
      });
  }

  // ✅ Update todo
  function updateTodo(id, updatedItem) {
    axios.put(`http://localhost:3000/api/todos/${id}`, updatedItem)
      .then((res) => {
        setTodos((prev) =>
          prev.map((todo) => (todo._id === id ? res.data : todo))
        );
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
        if (error.response?.status === 401) {
          logout();
        }
      });
  }

  // ✅ Delete todo
  function deleteTodo(id) {
    axios.delete(`http://localhost:3000/api/todos/${id}`)
      .then(() => {
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
        if (error.response?.status === 401) {
          logout();
        }
      });
  }

  // ✅ Toggle complete
  function toggleComplete(id) {
    const todo = todos.find((t) => t._id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };

    axios.put(`http://localhost:3000/api/todos/${id}`, updatedTodo)
      .then((res) => {
        setTodos((prev) =>
          prev.map((t) => (t._id === id ? res.data : t))
        );
      })
      .catch((error) => {
        console.error("Error toggling todo:", error);
        if (error.response?.status === 401) {
          logout();
        }
      });
  }

  // ✅ Load all todos from backend
  useEffect(() => {
    if (token) {
      axios.get("http://localhost:3000/api/todos")
        .then((res) => setTodos(res.data))
        .catch((error) => {
          console.error("Error fetching todos:", error);
          if (error.response?.status === 401) {
            logout();
          }
        });
    }
  }, [token]);

  return (
    <ContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-center mt-2">Manage Your Todos</h1>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo._id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const { token } = useAuth();

  if (!token) {
    return (
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowLogin(true)}
              className={`px-4 py-2 mr-2 rounded ${
                showLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              className={`px-4 py-2 rounded ${
                !showLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>
          {showLogin ? <Login /> : <Signup />}
        </div>
      </div>
    );
  }

  return <TodoApp />;
}

function AuthenticatedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AuthenticatedApp;
