import React, { useState, useContext } from 'react'
import Image from 'next/image'

import styles from "./Filter.module.css"
import images from "../../assets"
import { ChatDappContect } from "../../Context/ChatAppContext"
import { Model } from '../index'

const Filter = () => {
    const { account, addFriends } = useContext(ChatDappContect);
    const [addFriend, setAddFriends] = useState(false);
    return (
        <div className={styles.filter}>
        </div>

    )
}

export default Filter