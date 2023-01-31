import React from 'react';
import Image from 'next/image';

import styles from "./Loader.module.css";
import images from "../../assets";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader_box}>
                <Image src={images.loader} width={100} height={100} alt="loader"/>
            </div>
        </div>
    )
}

export default Loader