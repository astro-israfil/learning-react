import { useState } from "react";
import EditIcon from "../assets/edit.png";
import FolderIcon from "../assets/folder.jpg"
import useTodos from "../hooks/useTodos";

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [todoTitle, setTodoTitle] = useState(todo?.todoTitle || "");
    const {updateTodo, deleteTodo} = useTodos();

    return (
        <>
            <div className="w-full max-w-xl mx-auto flex flex-wrap gap-4">
                <input className="h-4 w-4" type="checkbox" value={todo?.completed} onChange={() => updateTodo(todo?.id, {...todo, completed: !todo.completed})} />
                {
                    editable ? <input autoFocus className="text-slate-700 font-bold text-2xl px-4 py-0 flex-1" type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                        : <span className={`text-slate-700 font-bold text-2xl px-4 py-0 flex-1 ${todo?.completed ? "line-through" : ""}`}>{todoTitle}</span>
                }
                <label htmlFor={todo?.id}>
                    <input className="hidden" type="checkbox" name="edit" id={todo?.id} checked={editable} onChange={() => setEditable((prev) => !prev)} />
                    { editable ? <img src={FolderIcon} alt="saveIcon" onClick={() => updateTodo(todo?.id, {...todo, todoTitle})} className="w-8 h-8 cursor-pointer" width={32} height={32} /> : <img src={EditIcon} alt="editIcon" className="w-8 h-8 cursor-pointer" width={32} height={32} />}
                </label>

                <button onClick={() => deleteTodo(todo?.id)} className="bg-red-700 px-5 py-1 text-white rounded-md"> X </button>
            </div>
        </>
    )
}

export default TodoItem