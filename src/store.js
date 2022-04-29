import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
export const LOCAL_STORAGE_KEY = "todos_key";

const loadState = localStorage.getItem(LOCAL_STORAGE_KEY);

function reducer(state = loadState ? JSON.parse(loadState) : [], action) {
  switch (action.type) {
    case ADD:
      const newTodo = { text: action.payload.text, id: Date.now() };
      return [newTodo, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function addAction(text) {
  return {
    type: ADD,
    payload: {
      text,
    },
  };
}

function deleteAction(id) {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
}

export const actionCreator = {
  addAction,
  deleteAction,
};

export const store = createStore(reducer);
