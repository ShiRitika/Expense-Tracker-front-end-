import "./App.css";
import { Typography, styled, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import TransactionHistory from "./components/TransitionHistory";
import History from "./components/History";

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
        Height: 140vh;
        width: 50%;
    }
`;
const useStyles = makeStyles({
    hearderContainer: {
        margin: "auto" ,
        border: "1px solid black",
        textAlign: "center",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",   
    },
});

function App() {
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
    // const [transactions, setTransaction] = useState([
    //     { id: 1, text: "momos", amount: 50, date: 15032022 },
    //     { id: 2, text: "cake", amount: -100, date: 16032022 },
    //     { id: 3, text: "book", amount: 200, date: 17032022 },
    //     { id: 4, text: "light", amount: -300, date: 18032022 },
    //     { id: 5, text: "pocket money", amount: 1000, date: 20032022 },
    // ]
    // );
    // console.log("dummydata:",transactions);
    
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
                        <History />
                    </Box>
                </MainComponentContainer>
            </div>
        </div>
    );
}

export default App;
