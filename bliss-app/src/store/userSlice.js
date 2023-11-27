import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";

const initialState = {
  status: "",
  error: "",
  user: {},
};

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (userId) => {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  }
);

export const addUserList = createAsyncThunk(
  "user/addList",
  async (list, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.post(`/api/thingstodolists/`, list, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
);

export const updateUserList = createAsyncThunk(
  "user/updateList",
  async (list, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.patch(
      `/api/thingstodolists/${list.id}`,
      list,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const deleteUserList = createAsyncThunk(
  "user/deleteList",
  async (list, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(
      `/api/thingstodolists/${list.id}`,
      list,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const getUserList = createAsyncThunk(
  "user/getLists",
  async (user, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(`/api/users/${user.id}`, user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
);

export const addTagToUserList = createAsyncThunk(
  "user/addTagToUserList",
  async (tag, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.post(
      `/api/thingstodolists/${tag?.listId}/tag/${tag?.id}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const removeTagFromUserList = createAsyncThunk(
  "user/removeTagToUserList",
  async (tag, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(
      `/api/thingstodolists/${tag?.listId}/tag/${tag?.id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const updateUserDescription = createAsyncThunk(
  "user/updateUserDescription",
  async (description, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.patch(
      `/api/descriptions/${description.id}`,
      description,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const deleteUserDescription = createAsyncThunk(
  "user/deleteUserDescription",
  async (description, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(`/api/descriptions/${description.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
);

export const updateUserExperience = createAsyncThunk(
  "user/updateUserExperience",
  async (experience, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.patch(
      `/api/experiences/${experience.id}`,
      experience,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const deleteUserExperience = createAsyncThunk(
  "user/deleteUserExperience",
  async (experience, { getState, dispatch }) => {
    const accessToken = getState()?.session?.user?.accessToken;
    const response = await axios.delete(`/api/experiences/${experience.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCurrentUser.pending, (state, action) => {
        (state.status = "pending"), (state.error = null);
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        (state.error = null), (state.user = action.payload);
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        (state.status = "error"), (state.error = action.error);
      })
      .addCase(getUserList.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user.ThingsToDoLists = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(addUserList.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(addUserList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user.ThingsToDoLists.unshift(action.payload);
      })
      .addCase(addUserList.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(updateUserList.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(updateUserList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.user.ThingsToDoLists.findIndex(
          (list) => list.id === parseInt(action.payload.id)
        );
        state.user.ThingsToDoLists[index] = action.payload;
      })
      .addCase(updateUserList.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(deleteUserList.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(deleteUserList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user.ThingsToDoLists = state.user.ThingsToDoLists.filter(
          (list) => list.id !== parseInt(action.payload.id)
        );
      })
      .addCase(deleteUserList.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(updateUserDescription.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(updateUserDescription.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.user.CustomDescriptions.findIndex(
          (desc) => desc.id === parseInt(action.payload.id)
        );
        state.user.CustomDescriptions[index] = action.payload;
      })
      .addCase(updateUserDescription.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(deleteUserDescription.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(deleteUserDescription.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user.CustomDescriptions = state.user.CustomDescriptions.filter(
          (desc) => desc.id !== parseInt(action.payload.id)
        );
      })
      .addCase(deleteUserDescription.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(updateUserExperience.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(updateUserExperience.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.user.Experiences.findIndex(
          (exp) => exp.id === parseInt(action.payload.id)
        );
        state.user.Experiences[index] = action.payload;
      })
      .addCase(updateUserExperience.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(deleteUserExperience.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(deleteUserExperience.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user.Experiences = state.user.Experiences.filter(
          (exp) => exp.id !== parseInt(action.payload.id)
        );
      })
      .addCase(deleteUserExperience.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(addTagToUserList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.user.ThingsToDoLists.findIndex(list => parseInt(list.id) === parseInt(action.payload.id))
        state.user.ThingsToDoLists[index] = action.payload;
      })
      .addCase(addTagToUserList.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(addTagToUserList.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(removeTagFromUserList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.user.ThingsToDoLists.findIndex(list => parseInt(list.id) === parseInt(action.payload.id))
        state.user.ThingsToDoLists[index] = action.payload;
      })
      .addCase(removeTagFromUserList.rejected, (state, action) => {
        state.error = action.error;
        state.status = "error";
      })
      .addCase(removeTagFromUserList.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      });
  },
});

export const { cleanUser } = userSlice.actions;
export default userSlice.reducer;
