import React, { useState } from 'react'

export default function EditItem({ editingTodo, onSaveEdit }) {
    const [editText, setEditText] = useState(editingTodo.text);

    const handleSaveClick = () => {
        onSaveEdit(editingTodo.id, editText);
    };
    const handleInputChange = (e) => {
        setEditText(e.target.value);
    }

    const handleSaveEdit = (e) => {
        onSaveEdit(editedTodo.id, editText);
    }

    return (
        <div>
            <input type="text" value={editText} onChange={handleInputChange} />
            <button onClick={handleSaveEdit}>Simpan</button>
        </div>
    )
}
