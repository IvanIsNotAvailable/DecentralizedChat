import React, { useState, useContext } from "react";
import Image from "next/image";
import { FcSearch } from "react-icons/fc";

import styles from "./Filter.module.css";
import images from "../../assets";
import { ChatDappContect } from "../../Context/ChatAppContext";
import { Model } from "../index";

const Filter = () => {
  const { account, addFriends } = useContext(ChatDappContect);
  const [addFriend, setAddFriends] = useState(false);
  return (
    <div className={styles.search}>
      <input />
      <button className={styles.search_icon}>
        <FcSearch />
      </button>
    </div>
  );
};

export default Filter;
