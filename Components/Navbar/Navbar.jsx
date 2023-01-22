import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// importing the navbar styles sheet from same directory
import styles from './Navbar.module.css';
import { ChatDappContect } from '../../Context/ChatAppContext';
import { Model, Error } from '../index';
import images from "../../assets";

const Navbar = () => {
  const menuItems = [
    {
      menu:"All Users",
      link:"alluser"
    },
    {
      menu:"Chat",
      link:"/"
    },
    {
      menu:"Contract",
      link:"/"
    },
    {
      menu:"Setting",
      link:"/"
    },
    {
      menu:"TERMS OF USE",
      link:"/"
    }
  ]


  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet } = useContext(ChatDappContect);
  return (
    <div className='{styles.Navbar}'>
      <div className='{styles.Navbar_box}'>
        <div className="{styles.Navbar_box_left}"></div>
        <div className="{styles.Navbar_box_right}"></div>
      </div>
    </div>
  )
}

export default Navbar