import { useState, useEffect } from "react"
import { TodoContextProvider } from "./contexts/todoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    })
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return todo
        }
        return prevTodo
      })
    });
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== id)
    })
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo}}>
      <div className="w-full h-screen bg-slate-800 flex flex-col flex-wrap">
        <div className="p-10">
          <TodoForm />
        </div>
        <div className="px-10 flex flex-col gap-4">
          {
            todos.map((todo) => (
              <TodoItem todo={todo} key={todo?.id} />
            ))
          }
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
