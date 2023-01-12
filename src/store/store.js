import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./reducer";
import apiSlice from "./apiSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;