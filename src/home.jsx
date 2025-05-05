import React, { useState } from 'react'
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
    <div className='task-container'>
      <h1>Task Application</h1>
      <div className="text-block-1">
        <p>Task application was made to simplify your daily tasks</p>
        <p>Create a new task for today and schedule it to save it</p>
      </div>
      <div className='task-input'>
        <label htmlFor="task">Task</label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleTasks()
          }}
        >
          <input type="text" id='task' value={text} onChange={e => handleChange(e)} />
        </form>
        <button onClick={handleTasks}>new task</button>
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
      <div className='scheduled-tasks'>
        <ScheduledTasks
          tasks={scheduledTasks}
          setTasks={setScheduledTasks} />
      </div>

      <div className='right-sidebar'>
        <div className="sidebar-content">
          <button>Save Tasks</button>
        </div>
      </div>
    </div>
  )
}

export default Home