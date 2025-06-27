const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "../features/userSlice"

const store =  configureStore({
    reducer: {
        users: userReducer
    }
});