import { createSlice } from "@reduxjs/toolkit";
import { FetchUser } from "./userthunk";

const initialState = {
    users: [],
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(FetchUser.pending,(state) => {
    }})