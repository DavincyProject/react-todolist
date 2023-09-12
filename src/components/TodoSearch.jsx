// import React from 'react'

export default function TodoSearch() {
  return (
    <div>
      <h1 className="font-bold text-2xl">TodoSearch</h1>
      <div className="container-fluid mx-2 flex m-2 border rounded-md p-3 flex justify-around">
        <div className="flex flex-col w-64">
          <div className="flex gap-2">
            <label htmlFor="search">
              <img src="/public/search.svg" alt="search" />
            </label>
            <input
              placeholder="Search Todo"
              className="border p-1 w-full"
              onChange=""
            ></input>
          </div>

          <button className="bg-blue-500 rounded mt-2 text-white font-medium h-8">
            Search
          </button>
        </div>
        <div className="flex flex-col-reverse">
          <button className="bg-blue-500 rounded mt-2 text-white font-medium w-64 h-8">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}
