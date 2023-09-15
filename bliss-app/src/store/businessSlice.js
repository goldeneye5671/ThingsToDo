import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { devURI } from ".";

const initialState = {
	businesses: [],
	initialFetch: false,
	status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const fetchBusinesses = createAsyncThunk(
	"businesses/fetchBusinesses",
	async (pageInfo) => {
		if (!pageInfo.page) throw new Error("page is not defined")
		const response = await axios.get(`${devURI}/api/businesses`,{params: {
			limit: parseInt(pageInfo.limit),
			offset: parseInt(pageInfo.offset),
			page: parseInt(pageInfo.page)
		}})
		return response.data;
	}
);

export const addBusiness = createAsyncThunk(
	"businesses/addBusiness",
	async (business) => {
		const response = await axios.post(
			`${devURI}/api/businesses`,
			business,
			{
				headers: {
					Authorization: `Bearer`,
				},
			}
		);
		return response.data;
	}
);

export const updateBusiness = createAsyncThunk(
	"businesses/updateBusiness",
	async (business) => {
		const response = await axios.patch(
			`${devURI}/api/businesses/${business.id}`,
			business,
			{
				headers: {
					Authorization: `Bearer`,
				},
			}
		);
		return response.data;
	}
);

export const deleteBusiness = createAsyncThunk(
	"businesses/deleteBusiness",
	async (business) => {
		const response = await axios.delete(
			`${devURI}/api/businesses/${business.id}`,
			business,
			{
				headers: {
					Authorization: `Bearer`,
				},
			}
		);
		return response.data;
	}
);

export const businessSlice = createSlice({
	name: "business",
	initialState,
	reducers: {
		sortBusinesses: {
			reducer(state, action) {
				state.businesses.sort((b1, b2) => {
					//need a way to sort businesses based off of a specified criteria
				});
			},
			prepare() {
				//needed here? There should only be a sort type passed in here like:
				// date created
				// name, (A to Z) (Z to A)
				// type (A to Z) (Z to A)
			},
		},
		filterBusinesses: {
			reducer(state, action) {
				state.businesses.filter((business) => {
					// Need a way to filter out businesses that don't match criteria
					// Could be a tag
					// Could be a search
					// Could be a date range
				});
			},
			prepare() {},
		},
		cleanBusinesses: {
			reducer(state, action) {
				state.businesses = [];
				state.initialFetch = false
			},
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchBusinesses.pending, (state, action) => {
				state.status = "pending";
                state.error = null
				state.initialFetch = true
			})
			.addCase(fetchBusinesses.fulfilled, (state, action) => {
				console.log(action.payload)
				state.status = "fulfilled";
				state.businesses = action.payload ? action.payload : [];
                state.error = null
				state.initialFetch = true
			})
			.addCase(fetchBusinesses.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
				state.initialFetch = false
			})
			//Adds businesses
			.addCase(addBusiness.fulfilled, (state, action) => {
				//may want to do a sort based off of post date
				state.businesses.unshift(action.payload);
			})
			//Updates business
			.addCase(updateBusiness.fulfilled, (state, action) => {
				let business = state.businesses.find(
					(business) => business.businessId === action.payload.businessId
				);
				for (const key of Object.keys(action.payload)) {
					key in business ? (business[key] = action.payload[key]) : null;
				}
			})
			//Deletes the business
			.addCase(deleteBusiness.fulfilled, (state, action) => {
				const businesses = state.businesses.filter((business) => {
					return parseInt(business.id) !== parseInt(action.payload.id);
				});
				state.businesses = businesses;
			});
	},
});

export const allBusinesses = (state) => state.businesses;
export const businessStatus = (state) => state.businesses.status;
export const businessError = (state) => state.businesses.error;
export const { sortBusinesses, filterBusinesses, cleanBusinesses } =
	businessSlice.actions;
export default businessSlice.reducer;
