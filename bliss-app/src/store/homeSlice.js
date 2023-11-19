import { createSlice } from "@reduxjs/toolkit";

import { fetchLists } from "./listSlice";
import { fetchBliss } from "./blissSlice";
import { fetchBusinesses } from "./businessSlice";

import axios from "../utils/axiosInstance";

const initialState = {
  lists: {
    status: "",
    error: null,
    lists: [],
  },

  bliss: {
    status: "",
    error: null,
    bliss: [],
  },

  businesses: {
    status: "",
    error: null,
    businesses: [],
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLists.pending, (state, action) => {
        state.lists.status = "pending";
        state.lists.error = null;
    })
    builder.addCase(fetchLists.fulfilled, (state, action) => {
        state.lists.status = "fulfilled";
        state.lists.lists = action.payload;
        state.error = null;
    })
    builder.addCase(fetchLists.rejected, (state, action) => {
        state.lists.status = "rejected";
        state.lists.lists = [];
        state.lists.error = action.error.message
    })
    builder.addCase(fetchBliss.pending, (state, action) => {
        state.bliss.status = "pending";
        state.bliss.bliss = [];
        state.bliss.error = null;
    })
    builder.addCase(fetchBliss.fulfilled, (state, action) => {
        state.bliss.status = "fulfilled";
        state.bliss.bliss = action.payload;
        state.bliss.error = null;
    })
    builder.addCase(fetchBliss.rejected, (state, action) => {
        state.bliss.status = "rejected";
        state.bliss.bliss = [];
        state.bliss.error = action.error.message;
    })
    builder.addCase(fetchBusinesses.pending, (state, action) => {
        state.businesses.status = "pending";
        state.businesses.businesses = [];
        state.businesses.error = null;
    })
    builder.addCase(fetchBusinesses.fulfilled, (state, action) => {
        state.businesses.status = "fulfilled";
        state.businesses.businesses = action.payload;
        state.businesses.error = null;
    })
    builder.addCase(fetchBusinesses.rejected, (state, action) => {
        state.businesses.status = "rejected";
        state.businesses.businesses = [];
        state.businesses.error = action.error.message;
    })
  },
});
