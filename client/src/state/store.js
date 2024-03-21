import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/userSlice";
import { messagesReducer } from "./messages/messageSlice";

export const store = configureStore({
  reducer: { users: usersReducer, messages: messagesReducer },
});

export const rootState = store.getState();
