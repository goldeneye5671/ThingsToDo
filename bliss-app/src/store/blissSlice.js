import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	bliss: {},
	activeBliss: {},
	page: 1,
	initialFetch: false,
	status: "idle",
	error: null,
};

export const fetchBliss = createAsyncThunk("bliss/fetchBliss", async (pageInfo) => {
	const response = await axios.get(`http://localhost:5000/api/thingstodo`, {params: pageInfo});
	return response.data;
});

export const fetchOneBliss = createAsyncThunk("/bliss/fetchOneBliss", async (blissId) => {
	const response = await axios.get(`http://localhost:5000/api/thingstodo/${blissId}`)
	return response.data
})

export const addBliss = createAsyncThunk("bliss/addBliss", async (bliss) => {
	const response = await axios.post(
		`http://localhost:5000/api/thingstodo/1`,
		bliss
	);
	return response.data;
});

export const updateBliss = createAsyncThunk(
	"bliss/updateBliss",
	async (bliss) => {
		const response = await axios.patch(
			`http://localhost:5000/api/thingstodo/1/${bliss.id}`,
			bliss
		);
		return response.data;
	}
);

export const deleteBliss = createAsyncThunk(
	`bliss/deleteBliss`,
	async (bliss) => {
		const response = await axios.delete(
			`http://localhost:5000/api/thingstodo/1/${bliss.id}`,
			bliss
		);
		return response.data;
	}
);

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
                state.bliss = []
				state.initialFetch = false;
            },
			// prepare() {},
		},
		cleanOneBliss: {
			reducer(state, action) {
				state.bliss.filter()
			},
		},
		nextPage: {
			reducer(state, action) {
				state.page = state.page + 1
			}
		},
		prevPage: {
			reducer(state, action) {
				state.page = state.page - 1
			}
		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchBliss.pending, (state, action) => {
                state.status="pending"
				state.initialFetch=true
                state.error = null
            })
			.addCase(fetchBliss.fulfilled, (state, action) => {
				console.log(action.payload)
				state.bliss[action.payload[1]] = action.payload[0]
				state.status="fulfilled"
				state.initialFetch = true;
                state.error = null
            })
			.addCase(fetchBliss.rejected, (state, action) => {
                state.status="rejected"
				state.initialFetch = false
                state.error = action.error.message
            })
			.addCase(fetchOneBliss.pending, (state, action) => {
				state.status = "pending"
				state.error=null
			})
			.addCase(fetchOneBliss.fulfilled, (state, action) => {
				state.status = "fulfilled"
				state.activeBliss = action.payload
				state.error = null
			})
			.addCase(fetchOneBliss.rejected, (state, action) => {
				state.status = "rejected"
				state.error = action.error.message
			})
            .addCase(addBliss.fulfilled, (state, action) => {
                state.bliss.unshift(action.payload);
            })
			.addCase(updateBliss.fulfilled, (state, action) => {
                let bliss = state.bliss.find((bliss => bliss.id === action.payload.bliss.id))
                for (const key of Object.keys(action.payload)) {
                    key in bliss ? (bliss[key] = action.payload[key]): null
                }
            })
			.addCase(deleteBliss.fulfilled, (state, action) => {
                const bliss = state.bliss.filter((bliss) => {
                    return parseInt(bliss.id) !== parseInt(action.payload.id)
                })
                state.bliss = bliss;
            });
	},
});

export const allBliss = (state) => state.bliss;
export const blissStatus = (state) => state.bliss.status;
export const blissError = (state) => state.bliss.error;
export const activeBliss = (state) => state.bliss.activeBliss
export const { sortBliss, filterBliss, cleanBliss, nextPage, prevPage } = blissSlice.actions;
export default blissSlice.reducer;
