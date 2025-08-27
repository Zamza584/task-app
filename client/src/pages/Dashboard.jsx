
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import '../css/dashboard.css';
import '../css/components.css';
import '../css/index.css';

export default function Dashboard() {
    const { user } = useContext(UserContext);
    const [cookies] = useCookies(["appState"]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (cookies.appState && cookies.appState.tasks) {
            setTasks(cookies.appState.tasks);
        }
    }, [cookies]);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className='btn' style={{ marginBottom: '1.5rem' }}>
                <button><Link to="/">Back to Task Application </Link></button>

            </div>
            {!!user && (
                <div className="dashboard-welcome">
                    <h2>Welcome, {user.userName}!</h2>
                    <p>This is your personalized dashboard.</p>
                </div>
            )}
            {!user && (
                <p className="dashboard-login-msg">Please log in to view your dashboard.</p>
            )}
            <div className="dashboard-tasks-list">
                <h3>Your Saved Tasks</h3>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div className="dashboard-task-item" key={task.id}>
                            {task.name}
                        </div>
                    ))
                ) : (
                    <div style={{ color: '#888', fontStyle: 'italic' }}>No tasks found in cookies.</div>
                )}
            </div>
        </div>
    );
}