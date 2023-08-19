import { CreateSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initalState = {
    customDescriptions: {
        customDescriptions: [],
        status: "idle",
        error: null
    },
    experiences: {
        experiences: [],
        status: "idle",
        error: null
    },
    lists: {
        lists: [],
        status: "idle",
        error: null
    },
    auth: {
        auth: [],
        status: "idle",
        error: null
    }
}

export const fetchUserInformation
