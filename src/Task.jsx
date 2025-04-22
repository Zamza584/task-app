import React, { useState } from 'react'


function Task({ name, onClose, onEdit, handleSchedule }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [time, setTime] = useState("")
    const [visibility, setVisibility] = useState({
        content1: false
    })

    function handleEdit() {
        if (isEditing) {
            onEdit(newName)
        }
        setIsEditing(prev => !prev)
    }

    const toggleContent = (content) => {
        setVisibility(prevState => ({
            ...prevState,
            [content]: !prevState[content]
        }));
    };

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
                <div>Task: {newName}</div >
            )}
            <div className="btn-container">
                <button onClick={onClose}>remove</button>
                <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
                <button onClick={() => toggleContent('content1')}>notify when</button>
            </div>


            {visibility.content1 &&
                <div>
                    <input type="time" onChange={(e) => {
                        setTime(e.target.value);
                    }} />
                    <button onClick={() => handleSchedule({ name: newName, time: time })}>schedule</button>
                </div>
            }
        </>
    )
}

export default Task