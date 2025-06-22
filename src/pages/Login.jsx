import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [result, setResult] = useState({
        data: {
            error: ""
        }
    }
    );

    async function handleSubmit(e) {

        try {
            e.preventDefault()
            axios.post('/login', { userName, password })
                .then(result => {
                    setResult(result)
                })
                .catch(error => console.log(error));

            if (!result.data.error) {
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-page">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group-username">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-input" autoComplete="on" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="form-group-password">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='error-message'>{result ? result.data.error : ""}</div>
                <button type="submit" className="form-button">Login</button>
            </form>
            <p className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default Login;