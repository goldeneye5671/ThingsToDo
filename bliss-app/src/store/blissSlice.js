import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	bliss: [],
	status: "idle",
	error: null,
};

export const fetchBliss = createAsyncThunk("bliss/fetchBliss", async () => {
	const response = await axios.get(`http://127.0.0.1:5000/api/thingstodo`);
	return response.data;
});

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
            },
			// prepare() {},
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchBliss.pending, (state, action) => {
                state.status="pending"
                state.error = null
            })
			.addCase(fetchBliss.fulfilled, (state, action) => {
                state.status="fulfilled"
                state.bliss = state.bliss.concat(action.payload)
                state.error = null
            })
			.addCase(fetchBliss.rejected, (state, action) => {
                state.status="rejected"
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
