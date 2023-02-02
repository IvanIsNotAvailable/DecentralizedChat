import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import images from "../../../assets";
import { converTime } from "../../../Utils/apiFeature";
import { Loader } from "../../Loader/Loader";
import styles from "./Chat.module.css";

const Chat = ({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  Loading,
  currentUserAddress,
  currentUserName,
}) => {
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setChatData(router.query);
  }, [router.isReady]);

  return (
    <div className={styles.chat}>
      {currentUserName && currentUserAddress ? (
        <div className={styles.chatUserInfo}>
          <Image src={images.person} alt="image" width={50} height={50} />
          <div className={styles.chatUserInfoBox}>
            <h5>{currentUserName}</h5>
            <p className={styles.show}>{currentUserAddress}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.chatBox}>
        <div className={styles.chatBoxInside}>
          <div className={styles.chatBox_left}>
            {friendMsg.map((el, i) => (
              <div>
                {el.sender == chatData.address ? (
                  <div className={styles.chatBox_left_title}>
                    <Image src={images.person} width={30} height={30} alt="profile" />
                    <span>
                      {chatData.name} {""}
                    </span>
                    <small>Time: {converTime(el.timestamp)}</small>
                  </div>
                ) : (
                  <div className={styles.chatBox_left_title}>
                    <Image src={images.person} width={30} height={30} alt="profile" />
                    <span>
                      {userName} {""}
                    </span>
                    <small>Time: {converTime(el.timestamp)}</small>
                  </div>
                )}
                <p key={i + 1}>
                  {el.msg}
                  {""}
                  {""}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.chatBox_right}></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
