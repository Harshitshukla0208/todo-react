import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
    const { todos, setTodos } = useContext(TodoContext)
    const [todotxt, setTodotxt] = useState("");
    
    function addTodo(todotxt) {
        let nextId = todos.length + 1;
        setTodos([...todos, {id: nextId, text: todotxt, isDone: false}])

    }
    
    return (
        <>
            <input 
                type="text"
                placeholder="New Todo..."
                value={todotxt}
                onChange={(event) => setTodotxt(event.target.value)}
            />
            <button onClick={() => {
                    addTodo(todotxt)
                    setTodotxt('')
                }}>Add
            </button>
        </>
    )
}
export default AddTodo;