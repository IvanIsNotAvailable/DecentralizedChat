import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { AiOutlineSearch } from "react-icons/ai";

// importing the navbar styles sheet from same directory
import styles from './Sidebar.module.css';
import { ChatDappContect } from '../../Context/ChatAppContext';
import images from "../../assets";

const Sidebar = () => {
  const menuItems = [
    {
      menu: "All User",
      link: "alluser"
    },
    {
      menu: "Chat",
      link: "/"
    },
    {
      menu: "Contract",
      link: "/"
    },
    {
      menu: "Setting",
      link: "/"
    },
    {
      menu: "TERMS OF USE",
      link: "/"
    }
  ]


  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet } = useContext(ChatDappContect);
  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <AiOutlineSearch className={styles.icon_search} />
        <input type="text" placeholder='Search by Username' />
      </div>
      <div className={styles.list}>
        {menuItems.map((el, i) => (
          <div
            className={`${styles.sidebar_item} ${active == i + 1 ? styles.sidebar_active : ""}`}
            key={i + 1}
            onClick={() => setActive(i + 1)}>
            <b className={styles.b_tab}></b>
            <b className={styles.b_tab}></b>
            <Link className={styles.sidebar_link} href={el.link}>{el.menu}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
