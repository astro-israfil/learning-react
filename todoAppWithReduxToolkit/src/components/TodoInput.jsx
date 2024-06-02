import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function TodoInput({value, setValue, isUpdate, updateId, setIsUpdate, setUpdateId}) {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(addTodo(value));
        setValue("");
    }
    const handleUpdate = () => {
        dispatch(updateTodo({id: updateId, text: value}));
        setIsUpdate(false);
        setUpdateId(null);
        setValue("");
    }
    return (
        <>
            <div className="flex flex-wrap w-full max-w-xl min-w-80 mx-auto">
                <input className="flex-1 rounded-e-0 rounded-s-md outline-none p-2 text-slate-700" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your todo" autoFocus />
                {
                    !isUpdate ? 
                        <button className="bg-green-600 text-white py-2 px-4 rounded-e-md" onClick={handleClick}>ADD</button>
                        :<button onClick={handleUpdate} className="bg-blue-700 text-white py-2 px-4 rounded-e-md">Update</button>
                }
            </div>
        </>
    )
}

export default TodoInput;