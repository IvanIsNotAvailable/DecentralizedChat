import React, { useEffect, useState, useContext } from "react";

import MyApp from "./_app";
import "bootstrap/dist/css/bootstrap.min.css";

import { ChatDappContect } from "../Context/ChatAppContext";
import { Welcome, Chat } from "../Components/index";

const ChatApp = () => {
  const { account } = useContext(ChatDappContect);
  return <div>{!account ? <Welcome /> : <Chat />}</div>;
};

export default ChatApp;
