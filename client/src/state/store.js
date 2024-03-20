import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/userSlice";

export const store = configureStore({
  reducer: { users: usersReducer },
});

export const rootState = store.getState();
