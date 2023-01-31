import React from 'react'
import styles from "./Welcome.module.css"



const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.title}>
                Welcome from the Cygnus Decentralized Chat Application...
            </div>
            <div className={styles.info}>
                You'll be wondering how this app works and how it differs from other chat apps.
            </div>
        </div>
    )
}

export default Welcome