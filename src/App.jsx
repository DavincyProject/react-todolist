import { useEffect, useState } from 'react'
import AddItem from './components/AddItem'
import Button from './components/Button'
import TodoFilter from "./components/TodoFilter"
import TodoSearch from "./components/TodoSearch"


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // ambil data todo dari local storage saat komponen dimuat pertama kali
    const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todosFromStorage)
  }, []);

  const addTodo = () => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todosFromStorage);
  };

  const handleDeleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    localStorage.removeItem('todos');
    setTodos([]);
  }

  return (
    <div className="container w-full/2 mx-auto p-4 border mt-5">
      <div className="mt-2 container-fluid mx-auto text-center">
        <TodoSearch />
        <h1 className="text-3xl font-bold">
          Todo List
        </h1>
        <div className="container-fluid mx-2 mt-2 p-2 border ">
          <TodoFilter />
        </div>
        <div>
          <AddItem addTodo={addTodo} />
        </div>
      </div>

      {/* todo list start */}
      <section id='todo items'>
        <div className='container-fluid my-2'>
          <div className='flex flex-col gap-2'>
            {todos.map((todo, index) => (
              <div className='flex justify-between border p-2 rounded-md' key={index}>
                <div>
                  <h1>{todo.text}</h1>
                </div>
                <div className='flex gap-1 items-center'>
                  <input type="checkbox" />
                  <a href=''>✏️</a>
                  <a href='' onClick={() => handleDeleteTodo(todo)}>🗑️</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* todo list end */}

      <div className='flex gap-2'>
        <Button text="Delete done tasks" bgColor="bg-red-500" />
        <Button onClick={handleDeleteAll} text="Delete all tasks" bgColor="bg-red-500" />
      </div>
    </div>
  )
}

export default App
