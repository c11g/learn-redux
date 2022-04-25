const countBox = document.querySelector("#countBox");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");

let count = 0;

const updateText = () => {
  countBox.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

addButton.addEventListener("click", handleAdd);
minusButton.addEventListener("click", handleMinus);

updateText();
