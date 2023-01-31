import React, { useState, useContext, useEffect } from 'react';

import { FcSearch } from "react-icons/fc"

import { UserCard } from "../Components/index";
import styles from "./alluser.module.css";
import { ChatDappContect } from '../Context/ChatAppContext';

const alluser = () => {
    const { userLists, addFriends } = useContext(ChatDappContect);
    return (
        <div className={styles.alluser_info}>
            <div className={styles.upper}>
                <div className={styles.title}>
                    <h3>Find and Add Your Friends</h3>
                </div>
                <div className={styles.search}>
                    <input />
                    <button className={styles.search_icon}><FcSearch /></button>
                </div>
            </div>

            <div className={styles.alluser}>
                {userLists.map((el, i) => (
                    <UserCard key={i + 1} el={el} i={i} addFriends={addFriends} />
                ))}
            </div>
        </div >
    )
}

export default alluser