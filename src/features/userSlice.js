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
            state.loading = true;
        })
        .addCase(FetchUser.fulfilled,(state,action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(FetchUser.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const { FetchUsers } = userSlice.actions;
export default userSlice.reducer;