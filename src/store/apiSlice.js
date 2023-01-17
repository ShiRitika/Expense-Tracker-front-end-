import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8080";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints:builder =>({
        //get:http://localhost:8080/api/income (query make get api)
        getIncomeTransaction: builder.query({
            query: () => "/api/income",
        }),

        //get:http://localhost:8080/api/expense
        getExpenseTransaction: builder.query({
            query: () => "/api/expense",
        }),

        //add new Income transaction
        //post:http://localhost:8080/api/income
        addIncomeTransaction: builder.mutation({
            query:(initialIncomeTransaction) => ({
                url: "/api/income",
                method: "POST",
                body:initialIncomeTransaction
            })
        }),

        //add new expense transaction
        //post:http://localhost:8080/api/expense
        addExpenseTransaction: builder.mutation({
            query:(initialExpenseTransaction) => ({
                url: "/api/expense",
                method: "POST",
                body:initialExpenseTransaction
            })
        }),

        //delete income record
        //delete:http://localhost:8080/api/income
        deleteIncomeTransaction: builder.mutation({
            query:recordId =>({
                url:"/api/income",
                method: "DELETE",
                body: recordId
            })
        }),

        //delete expense record
        //delete:http://localhost:8080/api/expense
        deleteExpenseTransaction: builder.mutation({
            query:recordId =>({
                url:"/api/expense",
                method: "DELETE",
                body: recordId
            })
        })
    })
});

export default apiSlice;