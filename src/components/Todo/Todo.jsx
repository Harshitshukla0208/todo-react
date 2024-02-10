import {useState} from "react"

function Todo({text, isDone, deleteTodo, editTodo, finishTodo}){
    
    const [isEditting, setIsEditting] = useState(false);
    const [todotxt, setTodotxt] = useState(text);
    
    return (
        <div>
            <input type="checkbox" checked={isDone} onChange={() => finishTodo(!isDone)} />
            
            {isEditting ? <input value={todotxt} onChange={(e) => setTodotxt(e.target.value)} /> : <span>{todotxt}</span>}
            
            <button onClick={() => {
                setIsEditting(!isEditting);
                editTodo(todotxt);
            }}>{isEditting ? 'Save' : 'Edit'}</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;