import React, { useEffect, useState, useContext } from "react";

import MyApp from "./_app";
import "bootstrap/dist/css/bootstrap.min.css";


import { ChatDappContect } from "../Context/ChatAppContext";



const ChatApp = () => {
  const {} = useContext(ChatDappContect);
  return <div>hello</div>;
};

export default ChatApp;
