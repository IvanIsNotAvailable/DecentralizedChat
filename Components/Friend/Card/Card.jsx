import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.css";
import images from "../../../assets";

const Card = ({ readMessage, readUser, el, i }) => {
  return (
    <Link
      href={{
        pathname: "/",
        query: { name: `${el.name}`, address: `${el.publicKey}` }
      }}
      className={styles.link}
    >
      <div
        className={styles.card}
        onClick={() => (readMessage(el.publicKey), readUser(el.publicKey))}
      >
        <div className={styles.cardBox}>
          <div className={styles.UserCard}>
            <div className={styles.icon_container}>
              <Image
                src={images.person2}
                alt="user"
                width={50}
                height={50}
                className={styles.profile}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{el.name}</div>
              <p>{el.publicKey.slice(21)}...</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
