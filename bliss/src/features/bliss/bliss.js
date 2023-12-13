import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

const blissAdapter = createEntityAdapter();

const initialState = blissAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBliss: builder.query({
            query: (page) => `/thingsToDo?limit=${15}&offset=${15*page}`,
            transformResponse: (responseData) => {
                return blissAdapter.setAll(initialState, responseData.allThings)
            },
            providesTags: (result, err, arg) => [
                    { type: 'Bliss', id: "Bliss" },
                    ...result.ids.map(id => ({ type: 'LIST', id }))
            ]
        })
    })
})

export const {useGetBlissQuery} = extendedApiSlice;

// returns the query result object
export const selectBlissResult = extendedApiSlice.endpoints.getBliss.select()

// Creates memoized selector
const selectBlissData = createSelector(
    selectBlissResult,
    postsResult => postsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllBliss,
    selectById: selectBlissById,
    selectIds: selectBlissIds
    // Pass in a selector that returns the posts slice of state
} = blissAdapter.getSelectors(state => selectBlissData(state) ?? initialState)