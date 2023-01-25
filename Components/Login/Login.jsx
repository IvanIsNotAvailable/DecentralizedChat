import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from 'next/image';


import styles from './Login.module.css';
import images from "../../assets";

const Login = () => {
    const [isShown, setIsShown] = useState(false);

    const toggleBtn = () => {
        setIsShown((isShown) => !isShown);
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.side_wallpaper}>
                <Image src={images.side_wall} className={styles.side_image} />
            </div>
            <div className={styles.login}>
                <div className={styles.logo}>Cygnus - Login</div>
                <div className={styles.body_content}>
                    <form action autoComplete="off" className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className={styles.input} placeholder="Username or Email" name="username" required />
                        <label htmlFor="password">Password</label>
                        <div className={styles.password_field}>
                            <button className={styles.icon_pass} onClick={() => toggleBtn()}>
                                {isShown ? (
                                    <AiFillEye />
                                ) : (
                                    <AiFillEyeInvisible />
                                )}
                            </button>
                            <input type={isShown ? "text" : "password"} className={styles.input_password} placeholder="Password" name="password" required />
                        </div>
                        <a href="/" className={styles.form_a}>Create an Account.</a>
                        <input type="submit" className={styles.input_btn} value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
