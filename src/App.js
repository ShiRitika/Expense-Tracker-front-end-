import "./App.css";
import { Typography, styled, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import TransactionHistory from "./components/TransitionHistory";
import SearchTransactionHistory from "./components/SearchTransactionHistory";

import { useEffect, useState } from "react";
import { apiSlice } from "./store/apiSlice";

const Header = styled(Typography)`
  font-size: 36px;
  color: white;
  background-color: #2c4762
`;
const MainComponentContainer = styled(Box)`
    display: flex;
    width: 80%;
    padding: 10px;
    margin: auto;
    border-Radius: 20px;
    background-Color: #fff;
    & > div {
        width: 50%;
    }
`;
const useStyles = makeStyles({
    hearderContainer: {
        margin: "auto" ,
        textAlign: "center",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",   
    },
});

const App = () => {
    const classes = useStyles();

    let { data: incomeData } = apiSlice.useGetIncomeTransactionQuery();
    let { data: expenseData } = apiSlice.useGetExpenseTransactionQuery();

    function getDataFromApi(incomeData, expenseData){
        let income_Transaction;
        let expense_Transaction;
        let transaction = [];
        if(incomeData !== undefined && expenseData !== undefined){
            income_Transaction = incomeData.map((v) => incomeData = v);
            expense_Transaction = expenseData.map((v) => expenseData = v);

            for (const object of Object.keys(expense_Transaction)) {
                transaction.push(expense_Transaction[object]);
            }
            for (const object of Object.keys(income_Transaction)) {
                transaction.push(income_Transaction[object]);
            }
            setTransaction(transaction);
        }
    }

    let transactionGetFromFunc = [];
    useEffect(() => {
        if(incomeData && expenseData){
            transactionGetFromFunc = getDataFromApi(incomeData, expenseData);
        }
    },[incomeData,expenseData]);
    
    const [transactions, setTransaction] = useState(transactionGetFromFunc);
    
    return (
        <div className="App">
            <div className={classes.hearderContainer}>
                <Header>Expense Tracker</Header>
                <MainComponentContainer>
                    <Box>
                        <Balance transactions={transactions} />
                        <ExpenseCard transactions={transactions} setTransaction={setTransaction} />
                        <TransactionHistory transactions={transactions} setTransaction={setTransaction}/>
                    </Box>
                    <Box>
                        <SearchTransactionHistory transactions={transactions}/>
                    </Box>
                </MainComponentContainer>
            </div>
        </div>
    );
};

export default App;
