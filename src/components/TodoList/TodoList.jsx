import Todo from "../Todo/Todo";

function TodoList({todos}) {
    return (
        todos && todos.map((todo) => <Todo key={todo.id} text={todo.text} isDone={todo.isDone} />)
    )
}
export default TodoList;