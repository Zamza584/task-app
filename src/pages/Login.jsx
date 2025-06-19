import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
        e.preventDefault(e)
        axios.post('http://localhost:5000/login', { userName, password })
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="login-page">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group-username">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-input" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="form-group-password">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="form-button">Login</button>
            </form>
            <p className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default Login;