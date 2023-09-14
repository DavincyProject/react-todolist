import React, { useState } from 'react'

export default function AddItem({ addTodo }) {
    const [todoText, setTodoText] = useState('');

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //validasi apakah todoText tidak kosong
        if (todoText.trim() === '') {
            return;
        }

        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const newTodo = {
            id: new Date().getTime(),
            text: todoText,
            done: false,
        };
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));

        //kosongkan input setelah item dipush
        setTodoText('');

        // panggil fungsi addTodo dari App.jsx
        addTodo();
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-2xl mt-2'>TodoInput</h1>
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-auto'>
                        <div className="flex items-center gap-2">
                            📝<input
                                placeholder='Input/Edit Todo'
                                className='border p-1 w-full'
                                value={todoText}
                                onChange={handleInputChange}>
                            </input>
                        </div>

                        <button type='submit' className='bg-btn-default rounded mt-2 text-white font-medium h-8'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
