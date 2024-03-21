import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { loading: false, messages: [] };

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    load: (state, action) => {
      state.messages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    });
    builder.addCase(fetchMessages.rejected, (state) => {
      state.loading = false;
      state.messages = [];
    });
  },
});

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  (users) => {
    return axios
      .get(`/api/messages?users[]=${users[0].id}&users[]=${users[1].id}`)
      .then((res) => res.data);
  },
);

export const messagesReducer = messageSlice.reducer;
