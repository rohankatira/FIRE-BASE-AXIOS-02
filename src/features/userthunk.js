import { databaseURL } from "../firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
const firebasedatabase = `${databaseURL}/users`;

export const FetchUser = createAsyncThunk("users/fetch", async (user,{rejectWithValue}) => {
    try{
        let response = await fetch(`${firebasedatabase}.json`);
        console.log(response);
        return response.data;   
    }catch(error) {
        console.log(error);
        return rejectWithValue(error.message);
    }
});