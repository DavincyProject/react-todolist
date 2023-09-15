import React from "react";
import AddItem from "../components/AddItem";

export default function AddTodo() {

  const addTodo = () => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todosFromStorage);
  };

  return <>
    <AddItem addTodo={addTodo} />
  </>;
}
