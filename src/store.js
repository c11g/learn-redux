import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const LOCAL_STORAGE_KEY = "todos_key";

const loadState = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialState = loadState ? JSON.parse(loadState) : [];

const addAction = createAction("ADD");
const deleteAction = createAction("DELETE");

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addAction, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteAction, (state, action) =>
      state.filter((todo) => todo.id !== action.payload)
    );
});

export const actionCreator = {
  addAction,
  deleteAction,
};

export const store = configureStore({
  reducer,
});
