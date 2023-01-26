import React from 'react';

import styles from "./Error.module.css";

const Error = ({ error }) => {
    return (
        <div className={styles.error}>
            <div className={styles.error_box}>
                <h1>Please Create a Wallet and Reload the browser.</h1>
                {error}
            </div>
        </div>
    );
}

export default Error