function Todo({text, isDone, deleteTodo}){
    return (
        <div>
            <input type="checkbox" checked={isDone} />
            <span>{text}</span>
            <button>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}
export default Todo;