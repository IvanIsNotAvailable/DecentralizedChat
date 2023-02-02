import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { ChatAppaddress, ChatAppABI } from "../Context/constant";

export const CheckWalletConnect = async () => {
  try {
    if (!window.ethereum)
      return console.log(
        "Install MetaMask and Create an account TO USE THIS APP! Important!!!"
      );
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const firstAcc = accounts[0];
    return firstAcc;
  } catch (error) {
    console.log(error);
  }
};

export const ConnectWallet = async () => {
  try {
    if (!window.ethereum)
      return console.log(
        "Install MetaMask and Create an account TO USE THIS APP! Important!!!"
      );
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAcc = accounts[0];
    return firstAcc;
  } catch (error) {
    console.log("ook");
    console.log(error);
  }
};

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ChatAppaddress, ChatAppABI, signerOrProvider);

export const ConnectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const converTime = (time) => {
  const newTime = new Date(parseInt(time));
  const realTime =
    newTime.getHours() +
    "/" +
    newTime.getMinutes() +
    "/" +
    newTime.getSeconds() +
    " Date:" +
    newTime.getDate() +
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

  return realTime;
};
