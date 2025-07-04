import { useEffect, useState, useContext } from 'react'
import Task from '../components/Task'
import ScheduledTasks from '../components/ScheduledTasks'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'


function Home() {
  const [cookies, setCookie] = useCookies(["appState"])

  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")
  const [scheduledTasks, setScheduledTasks] = useState([])
  const [error, setError] = useState()

  const { user } = useContext(UserContext)

  useEffect(() => {
    const savedState = cookies.appState;

    if (savedState) {
      try {
        if (savedState.tasks) setTasks(savedState.tasks);
        if (savedState.text !== undefined) setText(savedState.text)
        if (savedState.scheduledTasks) setScheduledTasks(savedState.scheduledTasks);

      } catch (err) {
        console.error("Invalid cookie content:", err);
      }
    }

  }, [])

  // cookies are set up when tasks or scheduledtasks are changed
  useEffect(() => {
    try {
      const state = { tasks, text, scheduledTasks };
      const stringified = JSON.stringify(state);
      console.log("Setting cookie:", stringified);
      setCookie("appState", stringified, { path: "/", maxAge: 604800 });
    } catch (e) {
      console.error("Failed to stringify state:", e);
    }

  }, [tasks, scheduledTasks])

  function handleTasks() {
    if (text === "") {
      setError(() =>
        <div>
          <p className='error-message'>Please enter a value</p>
        </div>)
      return
    }

    setTasks(prevTasks => [...prevTasks, { id: Date.now(), name: text }]);
    setText("");
    setError();

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

  async function handleSave() {
    const { tasks, scheduledTasks } = cookies.appState
    
    const res = await axios.post("/tasks", { tasks, scheduledTasks })
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
          {error}
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
          {user ? (<button onClick={handleSave} >Save Task</button>) : (<button><Link to="/login">Save Task</Link></button>)}
        </div>
      </div>
    </div>
  )
}

export default Home