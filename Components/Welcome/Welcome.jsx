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
                <br />
                <b>So, Firstly we'll explain how this app works...</b>
                <br />
                <p>As like the name of app this application work without third person and only in peer to peer so we don't need to worry about our data, information, and other privacy.</p>
                <b>And also, this app is written in solidity so we don't need to worry about too much and data in here are safe and not allowed to see from other only between users.</b>
                <ul>
                    <h5>So let's Start now</h5>
                    <li>Firstly you will notice the metamask prompt up on the screen to unlock! Don't worry nothing will harm you :) </li>
                    <li>If you don't have the metamask Just go click on <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">this</a> and download and install!</li>
                </ul>
            </div>
        </div>
    )
}

export default Welcome