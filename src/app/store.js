const { configureStore } = require("@reduxjs/toolkit");
import { userSlice } from "../features/userSlice";

const store =  configureStore({
    extrareducers:(builder)=>{

    }
});