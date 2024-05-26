import { useContext } from "react";
import { todoContext } from "../contexts/todoContext";

function useTodos() {
    return useContext(todoContext);
}

export default useTodos