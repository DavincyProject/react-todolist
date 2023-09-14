import React, { useState } from 'react'

export default function EditItem({ editingTodo, onSaveEdit }) {
    const [editText, setEditText] = useState(editingTodo.text);

    const handleSaveEdit = () => {
        onSaveEdit(editText);
    }

    const handleInputChange = (e) => {
        setEditText(e.target.value);
    }

    return (
        <div className='flex gap-2'>
            <input className="border rounded-md p-1 w-full" type="text" value={editText} onChange={handleInputChange} />
            <button onClick={handleSaveEdit}>💾</button>
        </div>
    )
}
