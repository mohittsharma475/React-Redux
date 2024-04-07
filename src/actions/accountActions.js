import axios from "axios"
const actionName = {
  increment: "account/increment",
  decrement: "account/decrement",
  incrementByAmount: "account/incrementbyamount",
  init: "amount/init",
  getUser: "account/getUser",
  getUserAccountPending: "account/getUser/pending",
  getUserAccountRejected: "account/getUser/rejected",
  getUserAccountFulfilled: "account/getUser/fulfilled",
  incrementBonus: "bonus/increment",
};

async function getUser(dispatch) {
  // error

  try {
    dispatch(getUserAccountPending());
    const { data } = await axios.get("http://localhost:3000/accouts/1");
    dispatch(getUserAccountFulfilled(data.amount));
  } catch (error) {
    dispatch(getUserAccountRejected(error.message));
  }

  // dispatch({ type: actionName.getUser, payload: data.amount });
}

function getUserAccountFulfilled(data) {
  return { type: actionName.getUserAccountFulfilled, payload: data };
}
function getUserAccountPending() {
  return { type: actionName.getUserAccountPending };
}
function getUserAccountRejected(error) {
  return { type: actionName.getUserAccountRejected, payload: error };
}

function init(value) {
  return { type: actionName.init, payload: value };
}

function increment() {
  return { type: actionName.increment };
}

function decrement() {
  return { type: actionName.decrement };
}

function incrementByAmount(value) {
  return { type: actionName.incrementByAmount, payload: value };
}

function incrementBonus() {
  return { type: actionName.incrementBonus };
}

export {
    actionName,
    increment,
    incrementBonus,
    incrementByAmount,
    decrement,
    init,
    getUser,
    getUserAccountFulfilled,
    getUserAccountPending,
    getUserAccountRejected

}