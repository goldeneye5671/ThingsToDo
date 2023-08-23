import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";

const initialState = {
	lists: [],
	status: "idle",
	error: null,
};

export const fetchLists = createAsyncThunk(
	"list/fetchLists",
	async (pageInfo) => {
		const response = await axios.get(
			`http://127.0.0.1:5000/api/thingstodolists`,
			{
				params: {
					limit: pageInfo.limit,
					offset: pageInfo.offset,
					page: pageInfo.page,
				},
			}
		);
		return response.data;
	}
);

export const fetchOneList = createAsyncThunk(
	"list/fetchOneList",
	async (listId) => {
		const response = await axios.get(
			`http://localhost:5000/api/thingstodolists/${listId}`
		);
		return response.data;
	}
);

export const addList = createAsyncThunk("list/addList", async (list) => {
	const response = await axios.post(
		`http://localhost:5000/api/thingstodolists`,
		list
	);
	return response.data;
});

export const updateList = createAsyncThunk("list/updateList", async (list) => {
	const response = await axios.patch(
		`http://localhost:5000/api/thingstodolists/${list.id}`
	);
	return response.data;
});

export const deleteList = createAsyncThunk("list/deleteList", async (list) => {
	const response = await axios.delete(
		`http://localhost:5000/api/thingstodolists/${list.id}`
	);
	return response.data;
});

export const listSlice = createSlice({
	name: "lists",
	initialState,
	reducers: {
		cleanLists: {
			reducer(state, action) {
				state.list = [];
				state.initialFetch = false;
			},
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchLists.pending, (state, action) => {
				state.status = "pending";
				state.initialFetch = true;
				state.error = null;
			})
			.addCase(fetchLists.fulfilled, (state, action) => {
				console.log(action.payload);
				state.lists = action.payload;
				state.status = "fulfilled";
				state.initialFetch = true;
				state.error = null;
			})
			.addCase(fetchLists.rejected, (state, action) => {
				state.status = "rejected";
				state.initialFetch = false;
				state.error = action.error.message;
			})
			.addCase(fetchOneList.pending, (state, action) => {
				state.status = "pending";
				state.error = null;
			})
			.addCase(fetchOneList.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.activeList = action.payload;
				state.error = null;
			})
			.addCase(fetchOneList.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			})
			.addCase(updateList.fulfilled, (state, action) => {
				const index = state.lists.findIndex(
					(list) => list.id === parseInt(action.payload.id)
				);
				state.lists[index] = action.payload;
			})
			.addCase(deleteList.fulfilled, (state, action) => {
				const list = state.bliss.filter(
					(list) => parseInt(list.id) !== parseInt(action.payload.id)
				);
				state.list = list;
			});
	},
});

export const allLists = (state) => state.list.list;
export const selectBlissById = (state, listId) =>
	state.list.list.find((list) => (list.id = listId));
export const listStatus = (state) => state.list.status
export const listError = (state) => state.list.error

export const {
    cleanLists
} = listSlice.actions
export default listSlice.reducer;
