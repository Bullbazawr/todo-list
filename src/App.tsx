import { useTodos } from "./hooks/useTodos"
import { useCreateTodo } from "./hooks/useCreateTodo"
import {useDeleteTodo} from "./hooks/useDeleteTodo"
import { SyntheticEvent, useState } from "react"
import todoService from "./services/todo.service"

function App() {
  const { isLoading, data } = useTodos()
  const [title, setTitle] = useState('')
  const { mutate: createTodo } = useCreateTodo(title)
  const { mutate: deleteTodo } = useDeleteTodo()

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    createTodo()
    setTimeout(() => {
      setTitle('')
    }, 1)
  }

  return (
    <div className="App">
      <div className="todo__list">
        <h1>My Todos</h1>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : data?.length ? (
          data.map(todo => (
            <div key={todo.id}>
              {todo.title}<button onClick={()=> deleteTodo(todo.id.toString())}>Completed</button>
            </div>
          ))
        ) : (
          <h1>No todos found.</h1>
        )}
      </div>
      <div className='todo__creator'>
        <h2>Create Todo</h2>
        <form onSubmit={submitHandler} className="create__form">
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter todo title" />
          <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default App