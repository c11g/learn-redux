import { createStore } from "redux";

const countBox = document.querySelector("#countBox");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");

let count = 0;
const updateText = () => {
  countBox.innerText = count;
};

/* Redux */
const ADD = "ADD";
const MINUS = "MINUS";
const countReducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
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
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

addButton.addEventListener("click", handleAdd);
minusButton.addEventListener("click", handleMinus);

/* Run */
updateText();
