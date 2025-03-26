import React, { useState } from 'react'


function Task({ name, onClose, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleEdit() {
        if (isEditing) { 
            onEdit(newName)
        } 
        setIsEditing(prev => !prev)
    }

    return (
        <>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        autoFocus
                    />
                </div>
            ) : (
                <div>task {newName}</div >
            )}

            <button onClick={onClose}>remove</button>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </>
    )
}

export default Task