import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import UpdateImg from "../assets/update.png";

function TodoItem({todo, index, handleUpdate}) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 max-w-xl min-w-80">
                <span className="text-blue-300 text-xl font-bold"><span className="rounded-md bg-gray-600 text-green-600 text-sm">{index + 1}</span> {todo?.text || "Anonymous"}</span>
                <button onClick={() => handleUpdate(todo?.text, todo.id)}>
                    <img src={UpdateImg} alt="update" className="w-5 h-5" width={20} height={20} />
                </button>
                <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-700 text-white px-3 rounded-full">X</button>
            </div>
        </>
    )
}

export default TodoItem