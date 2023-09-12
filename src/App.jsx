// import { useState } from 'react'

import TodoFilter from "./components/TodoFilter"
import TodoSearch from "./components/TodoSearch"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="mt-2 container-fluid mx-auto text-center">
        <TodoSearch />

        <h1 className="text-3xl font-bold">
          Todo List
        </h1>
        <div className="container-fluid mx-2 mt-2 p-2 border ">
          <TodoFilter />
        </div>
      </div>
    </div>
  )
}

export default App
