import { createStore } from "redux";

const countBox = document.querySelector("#countBox");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");

const countReducer = (count = 0) => {
  console.log(count);
  return count;
};
const countStore = createStore(countReducer);
console.log(countStore.getState());
