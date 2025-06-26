import axios from 'axios'
import { useState } from 'react';
import '../css/register.css'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [result, setResult] = useState()

    function handleSubmit(e) {
        e.preventDefault(e)
        axios.post('/register', { userName, email, password })
            .then(result => {
                setResult(result)
            })
            .catch(error => console.log(error));
        if (!result.data.error) {
            navigate("/login")
        }
    }

    return (
        <div className="register-page">
            <h1 className="form-title">Register</h1>
            <form onSubmit={handleSubmit} method="post" className="register-form">
                <div className="register-username">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={(e) => { setUserName(e.target.value) }} noValidate autoComplete="on" />
                </div>
                <div className="register-email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} noValidate autoComplete="on" />
                </div>
                <div className="register-password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} noValidate autoComplete="on" />
                </div>
                <div className='error-message'>{result ? result.data.error : ""}</div>
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    )
}