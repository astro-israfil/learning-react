import { useState } from "react"
import useTodos from "../hooks/useTodos";

function TodoForm() {
    const [todoTitle, setTodoTitle] = useState("");
    const { addTodo } = useTodos()

    const addTodoItem = (e) => {
        e.preventDefault();
        const id = Date.now();
        const todo = {
            id,
            todoTitle,
            completed: false
        };
        addTodo(todo);
        setTodoTitle("");
    }
    return (
        <>
            <form onSubmit={addTodoItem}>
                <div className="w-full max-w-xl mx-auto flex flex-wrap">
                    <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} className="flex-1 px-3 py-1 text-lg border-none active:border-blue-300 active:border outline-0 rounded-s-md" type="text" placeholder="Enter your todo" />
                    <button className="bg-yellow-600 px-3 py-3 rounded-e-md text-blue-200 font-bold" type="submit">Add TODO</button>
                </div>
            </form>
        </>
    )
}

export default TodoForm