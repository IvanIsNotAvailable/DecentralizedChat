import React, { useEffect, useState, useContext } from "react";

import MyApp from "./_app";
import "bootstrap/dist/css/bootstrap.min.css";


import { ChatDappContect } from "../Context/ChatAppContext";
import { Welcome } from "../Components/index"


const ChatApp = () => {
  //const { } = useContext(ChatDappContect);
  return (
    <div>
      <Welcome />
    </div>
  );
};

export default ChatApp;
