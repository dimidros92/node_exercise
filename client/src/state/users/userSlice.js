import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { loading: false, users: [] };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    load: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.users = [];
    });
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios.get("/api/users").then((res) => res.data);
});

export const usersReducer = userSlice.reducer;
