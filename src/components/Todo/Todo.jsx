import { useState } from "react";
import './Todo.css'

function Todo({ text, isDone, deleteTodo, editTodo, finishTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(text);

    return (
        <div className="todo-item">
        <input
            type="checkbox"
            checked={isDone}
            onChange={() => finishTodo(!isDone)}
            className="todo-checkbox"
        />

        {isEditing ? (
            <input
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="todo-input"
            />
        ) : (
            <span className="todo-text">{todoText}</span>
        )}

        <button
            onClick={() => {
            setIsEditing(!isEditing);
            editTodo(todoText);
            }}
            className="todo-edit-btn"
        >
            {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={deleteTodo} className="todo-delete-btn">
            Delete
        </button>
        </div>
    );
}

export default Todo;
