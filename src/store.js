import { configureStore, createSlice } from "@reduxjs/toolkit";

export const LOCAL_STORAGE_KEY = "todos_key";

const loadState = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialState = loadState ? JSON.parse(loadState) : [];

const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { add, remove } = todoSlice.actions;

export default configureStore({
  reducer: todoSlice.reducer,
});
