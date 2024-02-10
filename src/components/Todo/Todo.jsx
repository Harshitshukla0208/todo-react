function Todo({text, isDone}){
    return (
        <div>
            <input type="checkbox" checked={isDone} />
            <span>{text}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo;