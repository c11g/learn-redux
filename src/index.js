import { createStore } from "redux";

/* Todo Events */
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
todoForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (!todoInput.value) return;
  addTodo(todoInput.value);
  // Clean Up
  todoInput.value = "";
}

/* Action Types */
const ADD = "ADD";
const DELETE = "DELETE";

/* Redux */
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
  renderTodo();
});

function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      const newTodo = { id: Date.now(), text: action.text };
      return [newTodo, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

/* Actions */
function createAddAction(text) {
  return { type: ADD, text };
}

function createDeleteAction(id) {
  return { type: DELETE, id };
}

function addTodo(todoText) {
  const addAction = createAddAction(todoText);
  store.dispatch(addAction);
}

const todoList = document.querySelector("#todoList");
function renderTodo() {
  const todos = store.getState();
  todoList.innerHTML = todos.reduce(
    (acc, curr) =>
      `${acc}<li data-id="${curr.id}">${curr.text}<button type="button">DELETE</button></li>`,
    ""
  );
}
todoList.addEventListener("click", (e) => {
  const { target } = e;
  if (target.nodeName !== "BUTTON") return;
  const li = target.parentNode;
  const id = parseInt(li.dataset.id);
  const deleteAction = createDeleteAction(id);
  store.dispatch(deleteAction);
});
