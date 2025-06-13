import axios from 'axios'
import { useState } from 'react';


export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleSubmit(e) {
        e.preventDefault(e)
        axios.post('http://localhost:5000/register', { email, password, name })
            .then(result => console.log(result))
            .catch(error => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit} method="post" className="register-form">
            <h2 className="form-title">Register</h2>
            <div className="register-username">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => { setName(e.target.value) }} required />
            </div>
            <div className="register-email">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} required />
            </div>
            <div className="register-password">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} required />
            </div>
            <button type="submit" className="submit-btn">Register</button>
        </form>
    )
}