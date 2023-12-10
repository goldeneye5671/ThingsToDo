import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
    // baseQuery: fetchBaseQuery({baseUrl: "https://things-to-do-rmqm.onrender.com/api"}),
    tagTypes: ["Bliss"],
    endpoints: builder => ({
        getBliss: builder.query({
            query: (page) => `/thingsToDo?limit=${15}&offset=${page * 15}`,
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                const uniqueNewThings = newItems.allThings.filter(newThing => {
                    // Check if the newThing is not already in the currentCache
                    return !currentCache.allThings.some(existingThing => existingThing.id === newThing.id);
                });
                currentCache.allThings.push(...uniqueNewThings)
            },
            forceRefetch({currentArg, previousArg}) {
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
        }),
        getLists: builder.query({
            query: (page) => `/thingsToDoLists?limit=${15}&offset=${page * 15}`,
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                const uniqueNewList = newItems.filter(newList => {
                    // Check if the newThing is not already in the currentCache
                    return !currentCache.some(existingList => existingList.id === newList.id);
                });
                currentCache.push(...uniqueNewList)
            },
            forceRefetch({currentArg, previousArg}) {
                const shouldRefetch = currentArg !== previousArg
                return shouldRefetch;
            },
            invalidatesTags: ["List"],
        }),
    })
})

export const {
    useGetBlissQuery,
    useCreateBlissMutation,
    useUpdateBlissByIdMutation,
    useDeleteBlissByIdMutation,
    useGetOneBlissQuery,
    useGetListsQuery
  } = apiSlice;