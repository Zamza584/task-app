import React from 'react';

const Login = () => {
    return (
        <div className="login-page">
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
                Don't have an account? <a href="/register">Register here</a>
            </p>
        </div>
    );
};

export default Login;