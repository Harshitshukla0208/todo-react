import { useState } from "react";

function AddTodo({addTodos}) {
    const [todotxt, setTodotxt] = useState("");
    return (
        <>
            <input 
                type="text"
                placeholder="New Todo..."
                value={todotxt}
                onChange={(event) => setTodotxt(event.target.value)}
            />
            <button onClick={() => {addTodos(todotxt); setTodotxt('')}}>Add</button>
        </>
    )
}
export default AddTodo;