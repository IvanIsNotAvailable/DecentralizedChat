import React from 'react'
import Image from 'next/image'
import { BsFillPersonPlusFill } from "react-icons/bs"
import styles from "./UserCard.module.css"
import images from "../../assets"

const UserCard = ({ el, i, addFriends }) => {
    console.log(el);
    return (
        <div className={styles.UserCard}>
            <div className={styles.icon_container}>
                <Image src={images[`person${i + 1}`]} alt="user" width={100} height={100} className={styles.profile}/>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{el.name}</div>
                <p>{el.accountAddress.slice(0, 25)}...</p>
                <button onClick={() => addFriends({ name: el.name, accountAddress: el.accountAddress })} className={styles.btn}><BsFillPersonPlusFill className={styles.icon} />Add Friend</button>
            </div>
        </div>
    )
}

export default UserCard