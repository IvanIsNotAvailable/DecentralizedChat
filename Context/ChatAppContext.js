import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";

import {
  CheckWalletConnect,
  ConnectWallet,
  ConnectingWithContract,
} from "../Utils/apiFeature";

export const ChatDappContect = React.createContext();

export const ChatDAppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [friendLists, setfriendLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [FriendMsg, setFriendMsg] = useState([]);
  const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState("");

  // Chat User Data
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAddress, setCurrentUserAddress] = useState("");

  const router = useRouter();

  // fetch the data when load
  const fetchData = async () => {
    try {
      // Get Contract
      const contract = await ConnectingWithContract();
      // Get Account
      const connectAcc = await ConnectWallet();
      setAccount(connectAcc);
      // Get UserName
      const username = await contract.getUserName(connectAcc);
      setUserName(username);
      // Get Friend
      const friendList = await contract.getMyFriend();
      setfriendLists(friendList);
      // Get all app user list
      const userList = await contract.getAllAppUsers();
      setUserLists(userList);
    } catch (error) {
      setError("Please Install the metamask and Connect the wallet!");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Read msg
  const readMessage = async (friendAddress) => {
    try {
      const contract = await ConnectingWithContract();
      const reading = await contract.readMessage(friendAddress);
      setFriendMsg(reading);
    } catch (error) {
      setError("Currently You Have no message yet!");
    }
  };

  const createAccount = async ({ name, accountAddress }) => {
    try {
      //if (name || accountAddress)
      //  return alert("Name and Account address cannot be empty!");//setError("Name and Account address cannot be empty!");
      const contract = await ConnectingWithContract();
      const getCreatedUser = await contract.CreatAccount(name);
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(
        "Error required! while creating an account please refresh the page."
      );
    }
  };

  //add fri
  const addFriends = async ({ name, accountAddress }) => {
    try {
      console.log(name, accountAddress);
      //if (name || accountAddress) return setError("Please Provide Name and Account address!!");
      const contract = await ConnectingWithContract();
      const addmyfri = await contract.addFriend(accountAddress, name);
      setLoading(true);
      await addmyfri.wait();
      setLoading(false);
      router.push("/");
      window.location.reload();
    } catch (error) {
      setError("Something went wrong while adding friend. Try again.");
    }
  };

  //send msg
  const sendMessage = async ({ msg, address }) => {
    try {
      if (msg || address) return setError("Please type message");
      const contract = await ConnectingWithContract();
      const addmessage = await contract.sendMessage(address, msg);
      setLoading(true);
      await addmessage;
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Please reload and try again!!!");
    }
  };

  const readUser = async (userAddress) => {
    const contract = await ConnectingWithContract();
    const userName = await contract.getUserName(userAddress);
    setCurrentUserName(userName);
    setCurrentUserAddress(userAddress);
  };
  return (
    //status
    <ChatDappContect.Provider
      value={{
        readMessage,
        createAccount,
        addFriends,
        sendMessage,
        ConnectWallet,
        CheckWalletConnect,
        readUser,
        account,
        userName,
        friendLists,
        loading,
        FriendMsg,
        userLists,
        error,
        currentUserName,
        currentUserAddress,
      }}
    >
      {children}
    </ChatDappContect.Provider>
  );
};
