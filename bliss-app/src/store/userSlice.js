import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";
 

const initialState = {
    status: "",
    error: "",
    user: {}
}


export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async (userId) => {
    const response = await axios.get(
        `/api/users/${userId}`
    )
    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(getCurrentUser.pending, (state, action) => {
            state.status = "pending",
            state.error = null
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.error = null,
            state.user = action.payload;
        })
        .addCase(getCurrentUser.rejected, (state, action) => {
            state.status = "error",
            state.error = action.error
        })
    }
})

export const {
    cleanUser
} = userSlice.actions;
export default userSlice.reducer;