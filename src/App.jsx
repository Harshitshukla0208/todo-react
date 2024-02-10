import './App.css'
import TodoList from './components/TodoList/TodoList'

function App() {
    
    const todos = [
        {id: 1, text: 'todo1', isDone: true},        
        {id: 2, text: 'todo2', isDone: true}       
    ]
    return(
        <>
            <TodoList todos={todos} />
        </>
    )
}

export default App
