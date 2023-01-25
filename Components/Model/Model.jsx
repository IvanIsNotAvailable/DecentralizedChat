import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'

import styles from "./Model.module.css"
import images from "../../assets"
import { ChatDappContect } from '../../Context/ChatAppContext'
import { Loader } from '../../Components/index'


const Model = ({ openModel, title, head, info, smallInfo, images, functionName }) => {

    const [name, setName] = useState("");
    const [accountAddress, setAccountActive] = useState("");

    const { loading } = useContext(ChatDappContect);
    return (
        <div className={styles.Model}>
            <div className={styles.Model_box}>
                <div className={styles.Model_box_left}>
                    <Image src={images} alt="profile" width={700} height={700} />
                </div>
                <div className={styles.Model_box_right}>
                    <h1>
                        {title} <span>{head}</span>
                    </h1>
                    <p>{info}</p>
                    <small>{smallInfo}</small>

                    <div className={styles.Model_box_right_name}>
                        <div className={styles.Model_box_right_name_info}>
                            <Image src={images.person2} alt="user" width={30} height={30} />
                            <input type="text" placeholder='Your name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={styles.Model_box_right_name_info}>

                            <Image src={images.account} alt="user" width={30} height={30} />
                            <input
                                type="text"
                                placeholder={address || "Enter Address"}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model