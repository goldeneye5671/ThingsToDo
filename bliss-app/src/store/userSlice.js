import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { devURI } from ".";

const initialState = {
    auth: "",
    user: {}
}


export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async (userId) => {
    const response = await axios.get(
        `${devURI}/api/users/${userId}`
    )
    return response.data;
})

export const signInUser = createAsyncThunk("user/signInUser", async (user) => {
    const response = await axios.post(
        `${devURI}/api/session`,
        user
    );
    return response.data;
})


export const signUpUser = createAsyncThunk("user/signUpUser", async (user) => {
    const response = await axios.post(
        `${devURI}/api/session/signup`,
        user
    )
    console.log("Data: ", response.data)
    return response.data;
})


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        cleanUser: {
            reducer(state, action) {
                state.user = {
                    auth: "",
                    user: {}
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(signInUser.pending, (state, action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.status = "fulfilled",
                state.user = action.payload
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.status = "rejected",
                state.user = {}
                state.error = action.error
            })
            .addCase(signUpUser.pending, (state, action) => {
                state.status = "pending",
                state.user = {}
                state.error = null
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.status = "fulfilled",
                state.user = action.payload
                state.error = null;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error
                state.user = {};
            })
    }
})

export const {
    cleanUser
} = userSlice.actions;
export default userSlice.reducer;