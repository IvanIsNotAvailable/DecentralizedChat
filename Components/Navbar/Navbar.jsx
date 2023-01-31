import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUserAdd, AiOutlineApi } from "react-icons/ai";
// importing the navbar styles sheet from same directory
import styles from './Navbar.module.css';
import { ChatDappContect } from '../../Context/ChatAppContext';

import { Model, Error } from '../index';
import images from "../../assets";

const Navbar = () => {
  const menuItems = [
    {
      menu: "All Users",
      link: "alluser"
    },
    {
      menu: "Chat",
      link: "chat"
    },
    {
      menu: "Contract",
      link: "/contract"
    },
    {
      menu: "Setting",
      link: "/setting"
    },
    {
      menu: "TERMS OF USE",
      link: "/termsofuse"
    }
  ]


  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet, createAccount, error } = useContext(ChatDappContect);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.brand}>Cygnus</a>
      <div className={styles.link_gp}>
        {/* Desktop View */}
        <div className={styles.site}>
          {menuItems.map((el, i) => (
            <div
              onClick={() => setActive(i + 1)}
              key={i + 1}
              className={`${styles.nav_item} ${active == i + 1 ? styles.nav_active : ""
                }`}>
              <Link
                className={styles.nav_link}
                href={el.link}>
                {el.menu}</Link>
            </div>
          ))}
        </div>

        {/* Mobile View */}

        {open && (
          <div className={styles.mobile_site}>
            {menuItems.map((el, i) => (
              <div
                onClick={() => setActive(i + 1)}
                key={i + 1}
                className={`${styles.mobile_nav_item} ${active == i + 1 ? styles.mobile_nav_active : ""
                  }`}>
                <Link
                  className={styles.mobile_nav_link}
                  href={el.link}>
                  {el.menu}</Link>
              </div>
            ))}
          </div>
        )}

        {/* Connect to  Wallet */}
        <div className={styles.Navbar_box_right_connect}>
          {account == "" ? (
            <button className={styles.btn_warning} onClick={() => connectWallet()}>{""}<span>Connect Wallet</span></button>
          ) : (
            <button className={styles.btn_success} onClick={() => setOpenModel(true)}>
              {userName ? (<AiOutlineApi className={styles.icon} />) : (<AiOutlineUserAdd className={styles.icon} />)}
              <span>{userName || "Create an Account"}</span>
            </button>
          )}
          <button className={styles.menu} onClick={() => { open ? setOpen(false) : setOpen(true) }}>
            {open ? (<AiOutlineClose className={styles.icon} />)
              : (<AiOutlineMenu className={styles.icon} />)}
          </button>
        </div>
      </div>


      {/* MODEL COMPONENT */}
      {openModel && (
        <div className={styles.modelBox}>
          <Model openModel={setOpenModel}
            title="Welcome to"
            head="Cygnus"
            info='Users can have conversations, share information, and create web content in this Cygnus chat platform without having to enter their information.'
            smallInfo="Create your account"
            image={images.side_wall}
            functionName={createAccount}
            address={account}
          />

        </div>
      )}
      {error == "" ? "" : <Error error={error} />}
    </nav >

  );
};

export default Navbar

