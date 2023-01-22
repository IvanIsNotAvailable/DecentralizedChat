import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className="styles.login">
            <div className="styles.logo">Lofo - Login</div>
            <div className="styles.body_content">
                <form action autoComplete="false" className='styles.form'>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="styles.input" placeholder="Username" name="username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" className="styles.input" placeholder="Password" name="password" required />
                    <a href="./signup.html" className='styles.form_a'>Create an Account.</a>
                    <input type="submit" className="styles.input_btn" defaultValue="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login;
