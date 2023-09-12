// import { useState } from 'react'

import Button from "./components/Button";
import TodoFilter from "./components/TodoFilter";
import TodoSearch from "./components/TodoSearch";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="max-w-3xl mx-auto rounded shadow-lg p-3">
      <div className="mt-2 container-fluid mx-auto text-center">
        <TodoSearch />

        <h1 className="text-3xl font-bold">Todo List</h1>
        <div className="container-fluid mx-2 mt-2 p-2 border ">
          <TodoFilter />
        </div>
      </div>

      <div>TODO LIST DISINI</div>

      <div className="flex gap-3 justify-around">
        <Button text="test" />
        <Button text="test" />
      </div>
    </div>
  );
}

export default App;
