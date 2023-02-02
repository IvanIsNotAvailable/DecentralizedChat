import React, { useState, useContext } from "react";
import Image from "next/image";

import styles from "./Friend.module.css";
import Card from "./Card/Card";
import Filter from "../Filter/Filter";
import Chat from "./Chat/Chat";

import { ChatDappContect } from "../../Context/ChatAppContext";

const Friend = () => {
  const array = [
    {sender:"lucy",
    timestamp:"11:47"}
  ];
  const {
    sendMessage,
    account,
    friendLists,
    userName,
    Loading,
    friendMsg,
    currentUserName,
    currentUserAddress,
    readUser,
    readMessage,
  } = useContext(ChatDappContect);
  console.log(friendLists);
  return (
    <div className={styles.friend}>
      <div className={styles.friendBox}>
        <div className={styles.friend_left}>
          <div className={styles.search_field}>
            <Filter />
          </div>
          {friendLists.map((el, i) => (
            <Card
              key={i + 1}
              el={el}
              i={i}
              readMessage={readMessage}
              readUser={readUser}
            />
          ))}
        </div>
        <div className={styles.friend_right}>
          <Chat
            functionName={sendMessage}
            readMessage={readMessage}
            friendMsg={array}
            account={account}
            userName={userName}
            Loading={Loading}
            currentUserAddress={currentUserAddress}
            currentUserName={currentUserName}
          />
        </div>
      </div>
    </div>
  );
};

export default Friend;
