export default function Register() {
    return (
        <form action="/" method="post" className="register-form">
            <h2 className="form-title">Register</h2>
            <div className="register-username">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="register-email">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="register-password">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="submit-btn">Register</button>
        </form>
    )
}