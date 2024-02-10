import { useContext } from "react";
import Todo from "../Todo/Todo";
import './TodoList.css'
import TodoContext from "../../context/TodoContext";

function TodoList() {

    const {todos, setTodos} = useContext(TodoContext);

    function onDeleteTodo(id) {
        const newTodoList = todos.filter(todo => todo.id !== id);
        setTodos(newTodoList);
    }

    function onEditTodo(id, newTodo) {
        const newTodoList = todos.map(todo => {
            if (todo.id === id) {
                todo.text = newTodo;
            }
            return todo;
        })
        setTodos(newTodoList);
    }

    function onFinishTodo(id, state) { // function for checkbox
        const newTodoList = todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = state;
            }
            return todo;
        })
        setTodos(newTodoList);
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
