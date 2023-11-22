import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";
 

const initialState = {

}

export const signInUser = createAsyncThunk("user/signInUser", async (user) => {
    const response = await axios.post(
        `/api/session`,
        user
    );
    return response.data;
})


export const signUpUser = createAsyncThunk("user/signUpUser", async (user) => {
    const response = await axios.post(
        `/api/session/signup`,
        user
    )
    return response.data;
})

export const refreshUser = createAsyncThunk("user/refreshUser", async () => {
    const response = await axios.post(
        `/api/session/refresh`
    )
    return response.data
})

export const signOutUser = createAsyncThunk("user/signOutUser", async (_, {getState}) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(
        `/api/session`,
        {
          headers:{
            Authorization: `Bearer ${accessToken}`
          }  
        },
    )
    return response.data
})

export const sessionSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        cleanSession: (state) => {
          state.user = {};
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
                state.user = action.payload;
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
            .addCase(refreshUser.pending, (state, action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.status = "fulfilled",
                state.user = action.payload;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.status = "rejected",
                state.user = {}
                state.error = action.error
            })
            .addCase(signOutUser.pending, (state, action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(signOutUser.fulfilled, (state, action) => {
                state.status = "fulfilled"
            })
            .addCase(signOutUser.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error
            })
    }
})

export const {
    cleanSession
} = sessionSlice.actions;
export default sessionSlice.reducer;