import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
    const { dispatch } = useContext(TodoContext)
    const [todotxt, setTodotxt] = useState("");
    
    function addTodo(todotxt) {
        dispatch({type: 'add_todo', payload: {todotxt}})
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