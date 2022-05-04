import { configureStore, createAction } from "@reduxjs/toolkit";

export const LOCAL_STORAGE_KEY = "todos_key";

const loadState = localStorage.getItem(LOCAL_STORAGE_KEY);

function reducer(state = loadState ? JSON.parse(loadState) : [], action) {
  switch (action.type) {
    case addAction.type:
      const newTodo = { text: action.payload, id: Date.now() };
      return [newTodo, ...state];
    case deleteAction.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

const addAction = createAction("ADD");
const deleteAction = createAction("DELETE");

export const actionCreator = {
  addAction,
  deleteAction,
};

export const store = configureStore({
  reducer,
});
