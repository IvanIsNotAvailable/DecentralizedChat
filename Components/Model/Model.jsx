import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'

import styles from "./Model.module.css"
import images from "../../assets"
import { ChatDappContect } from '../../Context/ChatAppContext'
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";

import { Loader } from '../../Components/index'


const Model = ({ openModel, title, head, info, smallInfo, image, functionName, address }) => {

    const [name, setName] = useState("");
    const [accountAddress, setAccountAddress] = useState("");

    const { loading } = useContext(ChatDappContect);
    return (
        <div className={styles.Model}>
            <div className={styles.Model_box}>
                <div className={styles.Model_box_left}>
                    <Image src={image} alt="profile" className={styles.image} />
                </div>
                <div className={styles.Model_box_right}>
                    <h1 className={styles.title}>
                        {title} <span className={styles.head}>{head}</span>
                    </h1>
                    <p className={styles.info}>{info}</p>
                    <small className={styles.smallInfo}>{smallInfo}</small>

                    {
                        loading == true ? (
                            <Loader />
                        ) : (
                            <div className={styles.Model_box_right_name}>
                                <div className={styles.Model_box_right_name_info}>
                                    <AiOutlineUser className={styles.icons} />
                                    <input
                                        type="text"
                                        className={styles.Model_box_right_name_input}
                                        placeholder='Create Account Name'
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className={styles.Model_box_right_name_info}>
                                    <AiOutlineKey className={styles.icons} />
                                    <input
                                        className={styles.Model_box_right_name_input}
                                        type="text"
                                        placeholder={address || "Enter Address. Eg: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F"}
                                      
                                        onChange={(e) => setAccountAddress(e.target.value)} />
                                </div>
                                <div className={styles.btn_field}>
                                    <button
                                        onClick={() => functionName({ name, accountAddress })}
                                        className={styles.submitBtn}
                                    >Submit</button>
                                    <button
                                        onClick={() => openModel(false)}
                                        className={styles.cancelBtn}
                                    >Cancel</button>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default Model;