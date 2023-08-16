import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	bliss: [],
	initialFetch: false,
	status: "idle",
	error: null,
};

export const fetchBliss = createAsyncThunk("bliss/fetchBliss", async () => {
	const response = await axios.get(`http://127.0.0.1:5000/api/thingstodo`);
	return response.data;
});

export const fetchOneBliss = createAsyncThunk("/bliss/fetchOneBliss", async (blissId) => {
	const response = await axios.get(`http://127.0.0.1:5000/api/thingstodo/${blissId}`)
	return response.data
})

export const addBliss = createAsyncThunk("bliss/addBliss", async (bliss) => {
	const response = await axios.post(
		`http://127.0.0.1:5000/api/thingstodo`,
		bliss
	);
	return response.data;
});

export const updateBliss = createAsyncThunk(
	"bliss/updateBliss",
	async (bliss) => {
		const response = await axios.patch(
			`http://127.0.0.1:5000/api/thingstodo/${bliss.id}`,
			bliss
		);
		return response.data;
	}
);

export const deleteBliss = createAsyncThunk(
	`bliss/deleteBliss`,
	async (bliss) => {
		const response = await axios.delete(
			`http://127.0.0.1:5000/api/thingstodo/${bliss.id}`,
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
				//TODO: This will change to a state that looks like this:
				/**
				 * [
				 * 	[], each array in the matrix represents a pag, and the pages are sorted by id
				 * 	[],
				 * 	[],
				 * ]
				 */
				// Or it might just be an array and math will be done to calculate where it is for better filtering and sorting down the line

				//When fetching the data from the API, note that the API is the source of truth.
				// First you need to dort by the id because in an ideal world the id will not change
				// Both the state and the action will need to be sorted by ID for this to work
				// After the sort is done, then some kind of loop needs to occur over the longer array
				// then if an element exists in the API request and not the state, then the state needs to have that added to it at some point. Probably should store it somewhere first, then put it into the state and sort the state
				// Also if the element doesn't exist in the API request and does exist in the state, it needs to be removed from the state, and the iterator needs to back up one
				const sortedActionPayload =  action.payload.sort((a, b) => a.id - b.id)
				const sortedBlissState = state.bliss.sort((a, b) => a.id - b.id)
				let longestLength = Math.max(sortedActionPayload.length, sortedBlissState.length)
				for (let i = 0; i < longestLength; i++) {
					
				}
				state.bliss = sortedActionPayload
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
				state.bliss.push(action.payload)
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
export const { sortBliss, filterBliss, cleanBliss } = blissSlice.actions;
export default blissSlice.reducer;
