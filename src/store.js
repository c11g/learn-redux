import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

function reducer(state = [], action) {
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

export function createAddAction(text) {
  return {
    type: ADD,
    payload: {
      text,
    },
  };
}

export function createDeleteAction(id) {
  return {
    type: ADD,
    payload: {
      id,
    },
  };
}

export const store = createStore(reducer);
