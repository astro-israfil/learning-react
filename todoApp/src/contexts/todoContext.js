import { createContext } from "react"

export const todoContext = createContext({
    todos: [
        {
            id: "",
            todoTitle: "",
            completed: false
        }
    ],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
})

export const TodoContextProvider = todoContext.Provider
