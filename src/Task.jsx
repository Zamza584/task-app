import React, { useState } from 'react'


function Task({ name, onClose, onEdit, handleSchedule }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [time, setTime] = useState("")

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
            <button>notify when</button>

            <div>
                <input type="time" onChange={(e) => {
                    setTime(e.target.value);
                }} />
                <button onClick={() => handleSchedule({ name: newName, time: time })}>schedule</button>
            </div>
        </>
    )
}

export default Task