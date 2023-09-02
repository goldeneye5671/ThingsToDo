import { CreateSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalState = {
    user: {},``
    auth: {
        auth: [],
        status: "idle",
        error: null
    }
}


export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async (userId) => {

})


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {}
})

export const fetchUserInformation
