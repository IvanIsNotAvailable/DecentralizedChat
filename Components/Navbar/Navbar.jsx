import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// importing the navbar style sheet from same directory
import Style from './Navbar.module.css';
import { ChatDappContect } from '../../Context/ChatAppContext';
import { Model, Error } from '../index';

const Navbar = () => {
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet } = useContext(ChatDappContect);
  return (
    <div className='{Style.Navbar}'>
      <div className='{Style.Navbar_box}'>
        <div className="{Style.Navbar_box_left}"></div>
        <div className="{Style.Navbar_box_right}"></div>
      </div>
    </div>
  )
}

export default Navbar