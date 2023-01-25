import React, { use, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from 'next/image';


import styles from './Signup.module.css';
import images from "../../assets";

const Signup = () => {
    const [isShown, setIsShown] = useState(false);
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState("");

    const toggleBtn = () => {
        setIsShown((isShown) => !isShown);
    };

    const handlePassword = (passwordValue) => {
        const strengthChecks = {
            length: 0,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false,
        };

        strengthChecks.length = passwordValue.length >= 8 ? true : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
        strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
        strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

        let verifiedList = Object.values(strengthChecks).filter((value) => value);

        let strength =
            verifiedList.length == 5
                ? "Strong"
                : verifiedList.length >= 2
                    ? "Medium"
                    : "Weak";

        setPassword(passwordValue);
        setProgress(`${(verifiedList.length / 5) * 100}%`);
        setMessage(strength);
    };

    const getActiveColor = (type) => {
        if (type === "Strong") return "#8BC926";
        if (type === "Medium") return "#FEBD01";
        return "#FF0054";
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.shadow}>
                <div className={styles.side_wallpaper}>
                    <Image src={images.side_wall} className={styles.side_image} />
                </div>
                <div className={styles.login}>
                    <div className={styles.logo}>Cygnus - Sign Up</div>
                    <div className={styles.body_content}>
                        <form action autoComplete="off" className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className={styles.input} placeholder="Username or Email" name="username" required />
                            <label htmlFor="password" className={styles.status}>Password {password.length !== 0 ? (
                                <p className="message" style={{ color: getActiveColor(message) }}>
                                    &nbsp;-&nbsp;{message}
                                </p>
                            ) : null}
                            </label>
                            <div className={styles.password_field}>
                                <button className={styles.icon_pass} onClick={() => toggleBtn()}>
                                    {isShown ? (<AiFillEye />) : (<AiFillEyeInvisible />)}
                                </button>
                                <input
                                    type={isShown ? "text" : "password"}
                                    className={styles.input_password}
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={({ target }) => {
                                        handlePassword(target.value);
                                    }}
                                    required />
                            </div>
                            <a href="/" className={styles.form_a}>Already have an Account?</a>
                            <input type="submit" className={styles.input_btn} value="Sign Up" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
