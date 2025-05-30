import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Login = () => {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/users").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            })
    }, [])

    return (
        <div className="login-page">
            {(typeof backendData.users === "undefined") ? (
                <p>no data</p>
            ) :
                (backendData.users.map((users, i) => (
                    <p key={i}>{users}</p>
                )))
            }

            <h1 className="login-title">Login</h1>
            <form className="login-form">
                <div className="form-group-username">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-input" />
                </div>
                <div className="form-group-password">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" />
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