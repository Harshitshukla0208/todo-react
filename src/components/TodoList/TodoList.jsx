import { useContext } from "react";
import Todo from "../Todo/Todo";
import './TodoList.css'
import TodoContext from "../../context/TodoContext";

function TodoList() {

    const {todos, dispatch} = useContext(TodoContext);

    function onDeleteTodo(id) {
        dispatch({type: 'delete_todo', payload: {id}})
    }

    function onEditTodo(id, newTodo) {
        dispatch({type: 'edit_todo', payload: {id, newTodo}})
    }

    function onFinishTodo(id, state) { // function for checkbox
        dispatch({type: 'finish_todo', payload: {id, state}})
    }

    return (
        <div className="todo-list">
            {todos && todos.map(
                (todo) =>
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        isDone={todo.isDone}
                        editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
                        deleteTodo={() => onDeleteTodo(todo.id)}
                        finishTodo={(state) => onFinishTodo(todo.id, state)}
                    />
            )}
        </div>
    )
}
export default TodoList;
