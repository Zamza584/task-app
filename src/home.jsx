import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Task from './Task'
import ScheduledTasks from './ScheduledTasks'

function Home() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")
  const [scheduledTasks, setScheduledTasks] = useState([])

  function handleTasks() {
    setTasks(prevTasks => [...prevTasks, { id: Date.now(), name: text }]);
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function removeTask(index) {
    setTasks(prevTasks => prevTasks.filter((task) => task.id !== index));
  }

  function editTask(id, newName) {
    setTasks(prevTasks =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    )
  }

  function handleSchedule(scheduledTask) {
    setScheduledTasks(prevTasks => [...prevTasks, scheduledTask])
  }

  return (
    <div>
      <h1>TASK APP</h1>
      <Link to="/admin">create new task</Link>
      <div>create a new task simply by clicking here</div>
      <button onClick={handleTasks}>new task</button>
      <div>
        <label htmlFor="task">task</label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleTasks()
          }}
        >
          <input type="text" id='task' value={text} onChange={e => handleChange(e)} />
        </form>
      </div>
      <div className="results">
        {
          tasks.map(task => (
            <Task
              key={task.id}
              name={task.name}
              onClose={() => removeTask(task.id)}
              onEdit={(newName) => editTask(task.id, newName)}
              handleSchedule={handleSchedule}
            />
          ))
        }
      </div>
      <div>
        <ScheduledTasks tasks={scheduledTasks} />
      </div>
    </div>
  )
}

export default Home