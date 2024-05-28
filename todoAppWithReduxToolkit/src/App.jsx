import { useState } from "react";
import { useSelector } from "react-redux"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem";

function App() {
  const [value, setValue] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const todos = useSelector((state) => state.todos);
  
  const handleUpdate = (value, id) => {
    setValue(value);
    setIsUpdate(true);
    setUpdateId(id);
  }

  return (
    <>
      <div className="bg-slate-900 text-blue-300 w-full h-screen flex flex-col items-center">
        <h1 className="text-5xl text-blue-300 font-bold text-center">Todo App with Redux-toolkit</h1>
        <div className="p-10 w-full">
        <TodoInput value={value} setValue={setValue} isUpdate={isUpdate} setIsUpdate={setIsUpdate} updateId={updateId} setUpdateId={setUpdateId} />
        </div>
        <div className="p-10 flex flex-col items-center gap-3 overflow-y-auto overflow-x-hidden w-full">
          {
            todos.length ? todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} handleUpdate={handleUpdate} />
            )) : (
              <h3 className="text-yellow-700">No Task Found in List</h3>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
