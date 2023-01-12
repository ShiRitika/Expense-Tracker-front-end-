import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    incomeTransaction : [],
    expenseTransaction: []
};

export const transactionSlice = createSlice({
    name: "Transaction",
    initialState,
    reducers:{
        getIncomeTransaction:() => {

        }
    }
});

export const { getIncomeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;