import { createStore } from "redux";

const countBox = document.querySelector("#countBox");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");

let count = 0;
const updateText = () => {
  countBox.innerText = count;
};

/* Redux */
const countReducer = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countReducer);
const onChange = () => {
  count = countStore.getState();
  updateText();
};
countStore.subscribe(onChange);

/* Counter */
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

addButton.addEventListener("click", handleAdd);
minusButton.addEventListener("click", handleMinus);

/* Run */
updateText();
