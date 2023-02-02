import React from "react";

import styles from "./Chat.module.css";

import Sidebar from "../Sidebar/Sidebar";

const Chat = () => {
  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Chat;
