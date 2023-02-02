import React from 'react';

import styles from "./Error.module.css";

const Error = ({ error }) => {
    return (
        <div className={styles.error}>
            <div className={styles.error_box}>
                <strong>Please Create a Wallet or Reload the browser.</strong>
                <div>{error}</div>
            </div>
        </div>
    );
}

export default Error