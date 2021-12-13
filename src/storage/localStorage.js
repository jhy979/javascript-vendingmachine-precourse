import { COIN } from "../utils/constants.js";

const setOwnChange = (ownChange) => {
  localStorage.setItem("ownChange", JSON.stringify(ownChange));
};

const getOwnChange = () => {
  if (localStorage.getItem("ownChange") === null) {
    setOwnChange(new Array(COIN.length).fill(0));
  }

  return JSON.parse(localStorage.getItem("ownChange"));
};

const setUserMoney = (userMoney) => {
  localStorage.setItem("userMoney", parseInt(userMoney, 10));
};

const getUserMoney = () => {
  if (localStorage.getItem("userMoney") === null) {
    setUserMoney(0);
  }

  return parseInt(localStorage.getItem("userMoney"), 10);
};

export { getOwnChange, setOwnChange, setUserMoney, getUserMoney };
