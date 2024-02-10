import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
    
    const [todos, setTodos] = useState([
        {id: 1, text: 'todo1', isDone: true},        
        {id: 2, text: 'todo2', isDone: true}       
    ])

    function addTodos(todotxt){
        let nextId = todos.length + 1;
        setTodos([...todos, {id: nextId, isDone: false, text: todotxt}])
    }

    return(
        <>
            <AddTodo addTodos={addTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    )
}

export default App
