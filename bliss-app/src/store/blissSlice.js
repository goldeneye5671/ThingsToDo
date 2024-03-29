import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";
 

const initialState = {
	bliss: {
		minPage: 0,
		maxPage: 0,
		content: [],
	},
	initialFetch: false,
	status: "idle",
	error: null,
};

export const fetchBliss = createAsyncThunk(
	"bliss/fetchBliss",
	async (pageInfo) => {
		if (!pageInfo.page) throw new Error("Page is not defined");
		const response = await axios.get(`/api/thingstodo`, {
			params: {
				limit: parseInt(pageInfo.limit),
				offset: parseInt(pageInfo.offset),
				page: parseInt(pageInfo.page),
			},
		});
		return response.data;
	}
);

export const fetchOneBliss = createAsyncThunk(
	"bliss/fetchOneBliss",
	async (blissId) => {
		const response = await axios.get(
			`/api/thingstodo/${blissId}`
		);
		return response.data;
	}
);

export const addBliss = createAsyncThunk("bliss/addBliss", async (bliss) => {
	const response = await axios.post(
		`/api/thingstodo/`,
		bliss
	);
	return response.data;
});

export const updateBliss = createAsyncThunk(
	"bliss/updateBliss",
	async (bliss) => {
		const response = await axios.patch(
			`/api/thingstodo/${bliss.id}`,
			bliss
		);
		return response.data;
	}
);

export const deleteBliss = createAsyncThunk(
	`bliss/deleteBliss`,
	async (bliss) => {
		const response = await axios.delete(
			`/api/thingstodo/${bliss.id}`,
			bliss
		);
		return response.data;
	}
);


export const addDescriptionToBliss = createAsyncThunk("bliss/addDescriptionToBliss", async (bliss, {getState}) => {
	const accessToken = getState()?.session?.user?.accessToken
	const response = await axios.post(
		`/api/descriptions`,
		bliss,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	);
	return response.data;
});

export const addExperienceInBliss = createAsyncThunk("bliss/addExperienceInBliss", async (bliss, {getState}) => {
	const accessToken = getState()?.session?.user?.accessToken
	const response = await axios.post(
		`/api/experiences`,
		bliss,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	);
	return response.data;
});

export const blissSlice = createSlice({
	name: "bliss",
	initialState,
	reducers: {
		sortBliss: {
			reducer(state, action) {},
			// prepare() {},
		},
		filterBliss: {
			reducer(state, action) {},
			// prepare() {},
		},
		cleanBliss: {
			reducer(state, action) {
				state.bliss = {
					minPage: 0,
					maxPage: 0,
					content: [],
				};
			},
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchBliss.pending, (state, action) => {
				state.status = "pending";
				state.initialFetch = true;
				state.error = null;
			})
			.addCase(fetchBliss.fulfilled, (state, action) => {
				state.bliss.content = action.payload.allThings
				state.bliss.content.sort((bliss1, bliss2) => bliss1.id - bliss2.id);
				state.status = "fulfilled";
				state.initialFetch = true;
				state.error = null;
			})
			.addCase(fetchBliss.rejected, (state, action) => {
				state.status = "rejected";
				state.initialFetch = false;
				state.error = action.error.message;
			})
			.addCase(fetchOneBliss.pending, (state, action) => {
				state.status = "pending";
				state.error = null;
			})
			.addCase(fetchOneBliss.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.bliss.content.unshift(action.payload);
				state.error = null;
			})
			.addCase(fetchOneBliss.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			})
			.addCase(addBliss.fulfilled, (state, action) => {
				state.bliss.unshift(action.payload);
			})
			.addCase(updateBliss.fulfilled, (state, action) => {
				let blissIndex = state.bliss.content.findIndex(
					(bliss) => (bliss.id = action.payload.bliss.id)
				);
				state.bliss[blissIndex] = action.payload.bliss;
			})
			.addCase(deleteBliss.fulfilled, (state, action) => {
				const bliss = state.bliss.filter((bliss) => {
					return parseInt(bliss.id) !== parseInt(action.payload.id);
				});
				state.bliss = bliss;
			})
			.addCase(addDescriptionToBliss.fulfilled, (state, action) => {
				state.status="fulfilled";
				const index = state.bliss.content.findIndex(bliss => parseInt(bliss.id) === parseInt(action.payload.thingToDoId))
				state.bliss.content[index].CustomDescriptions.unshift(action.payload)
			})
			.addCase(addDescriptionToBliss.pending, (state, action) => {
				state.status="pending"
				state.error = null
			})
			.addCase(addDescriptionToBliss.rejected, (state, action) => {
				state.status="error"
				state.error = action.error
			})
			.addCase(addExperienceInBliss.fulfilled, (state, action) => {
				state.status="fulfilled";
				const index = state.bliss.content.findIndex(bliss => parseInt(bliss.id) === parseInt(action.payload.thingToDoId))
				state.bliss.content[index].Experiences.unshift(action.payload)
			})
			.addCase(addExperienceInBliss.pending, (state, action) => {
				state.status="pending"
				state.error = null
			})
			.addCase(addExperienceInBliss.rejected, (state, action) => {
				state.status="error"
				state.error = action.error
			})
	},
});

export const allBliss = (state) => state.bliss.bliss.content;
export const selectBlissById = (state, blissId) =>
	state.bliss.bliss.content.find((bliss) => bliss.id === blissId);
export const blissStatus = (state) => state.bliss.status;
export const blissError = (state) => state.bliss.error;
// export const activeBliss = (state) => state.bliss.activeBliss;
export const {
	sortBliss,
	filterBliss,
	cleanBliss,
	nextPage,
	prevPage,
	setPage,
} = blissSlice.actions;
export default blissSlice.reducer;
