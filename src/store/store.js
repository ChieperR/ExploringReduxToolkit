import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./favorites/favorites.slice.js";
import counterReducer from "./favorites/counter.slice.js"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    devTools: true,
})