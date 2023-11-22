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

export const addUserList = createAsyncThunk("user/addList", async (list, {getState, dispatch}) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.post(
      `/api/thingstodolists/`, list, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      } 
    );
    return response.data;
})

export const updateUserList = createAsyncThunk("user/updateList", async (list, {getState, dispatch}) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.patch(
      `/api/thingstodolists/${list.id}`, list, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      } 
    );
    return response.data;
})

export const deleteUserList = createAsyncThunk("user/deleteList", async (list, {getState, dispatch}) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(
        `/api/thingstodolists/${list.id}`, list, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        } 
      );
      return response.data
})

export const getUserList = createAsyncThunk("user/getLists", async (user, {getState, dispatch}) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(
        `/api/users/${user.id}`, user, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        } 
      );
      return response.data
})

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
        .addCase(getUserList.pending, (state, action) => {
            state.status = "pending";
            state.error = null
        })
        .addCase(getUserList.fulfilled, (state, action) => {
            state.status="fulfilled";
            state.user.ThingsToDoLists = action.payload;
        })
        .addCase(getUserList.rejected, (state, action) => {
            state.error = action.error
            state.status = "error";
        })
        .addCase(addUserList.pending, (state, action) => {
            state.status = "pending";
            state.error = null
        })
        .addCase(addUserList.fulfilled, (state, action) => {
            state.status="fulfilled";
            state.user.ThingsToDoLists.unshift(action.payload);
        })
        .addCase(addUserList.rejected, (state, action) => {
            state.error = action.error
            state.status = "error";
        })
        .addCase(updateUserList.pending, (state, action) => {
            state.status = "pending";
            state.error = null
        })
        .addCase(updateUserList.fulfilled, (state, action) => {
            state.status="fulfilled";
            const index = state.user.ThingsToDoLists.findIndex((list) => list.id === parseInt(action.payload.id));
            state.user.ThingsToDoLists[index] = action.payload;
        })
        .addCase(updateUserList.rejected, (state, action) => {
            state.error = action.error
            state.status = "error";
        })
        .addCase(deleteUserList.pending, (state, action) => {
            state.status = "pending";
            state.error = null
        })
        .addCase(deleteUserList.fulfilled, (state, action) => {
            state.status="fulfilled";
            state.user.ThingsToDoLists = state.user.ThingsToDoLists.filter((list) => list.id !== parseInt(action.payload.id));
            console.log("Remaining Lists", state.user.ThingsToDoLists)
        })
        .addCase(deleteUserList.rejected, (state, action) => {
            state.error = action.error
            state.status = "error";
        })
    }
})

export const {
    cleanUser
} = userSlice.actions;
export default userSlice.reducer;