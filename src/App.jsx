import './App.css'
import TodoList from './assets/components/todo/TodoList'
import data from "./assets/data/data"

function App() {



  return (
    <>
    <h1>My Todos</h1>

    <TodoList todoArr={data}/>
      
    </>
  )
}

export default App
