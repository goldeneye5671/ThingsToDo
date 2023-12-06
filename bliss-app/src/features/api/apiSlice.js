import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import process from "process";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: process.env.NODE_ENV === 'production' ? "https://things-to-do-rmqm.onrender.com/" : 'http://localhost:5000/api'}),
    tagTypes: ["Bliss"],
    endpoints: builder => ({
        getBliss: builder.query({
            query: (page) => `/thingsToDo?limit=${15}&offset=${page * 15}`,
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                currentCache.allThings.push(...newItems.allThings)
            },
            forceRefetch({currentArg, previousArg}) {
                console.log(currentArg, previousArg)
                const shouldRefetch = currentArg !== previousArg
                return shouldRefetch;
            },
            invalidatesTags: ["Bliss"],
        }),
        getOneBliss: builder.query({
            query: (blissId) => ({
                url: `/thingsToDo/${blissId}`,
            }),
            invalidatesTags: ["Bliss"],
        }),
        createBliss: builder.mutation({
            query: (bliss) => ({
                url: '/thingsToDo',
                method: "POST",
                body: bliss
            }),
            invalidatesTags: ["Bliss"],
        }),
        updateBlissById: builder.mutation({
            query: (bliss) => ({
                url: `/thingsToDo/${bliss?.id}`,
                method: "PATCH",
                body: bliss
            }),
            invalidatesTags: ["Bliss"],
        }),
        deleteBlissById: builder.mutation({
            query: (id) => ({
                url: `/thingsToDo/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Bliss"]
        })
    })
})

export const {
    useGetBlissQuery,
    useCreateBlissMutation,
    useUpdateBlissByIdMutation,
    useDeleteBlissByIdMutation,
    useGetOneBlissQuery
  } = apiSlice;