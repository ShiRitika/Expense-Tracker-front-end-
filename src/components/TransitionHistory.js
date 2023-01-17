import { Typography, Divider, Box, List, styled } from "@mui/material";
import { PropTypes } from "prop-types";
import ParticularTransaction from "./ParticularTransaction";
import { useEffect, useState } from "react";

const MainContainer = styled(Box)`
margin: 2rem 0 0 0;
    & > h5 {
        font-weight: 600;
        font-size: 27px;
        margin-top: 10px;
    }
    & > hr {
        border-color: rgb(28 21 21 / 36%);
    }
    & > ul {
        margin: 0 2px;
        & > hr {
            border-color: rgb(112 100 100 / 36%); 
            margin: 0 1rem 0 1rem;
        }
        & > li {
            & > div {
                color: rgb(110, 96, 96);
                flex: 1 1 0;
                & > svg {
                    cursor: pointer;
                }
                & > span {
                    font-weight: bold;
                }
            }
        }
    }
`;

const TransactionHistory = ({ transactions, setTransaction }) => {
    transactions.reverse();
    const getFiveData = () => {
        if(transactions[0] !== undefined){
            let fiveTransaction = [];
            for(let i = 0; i < 5 ; i++) {
                fiveTransaction.push(transactions[i]);
            }
            setFiveTransaction(fiveTransaction);
        }
    };
    
    let  fiveTransactionGetFromFunc = [];
    useEffect(() => {
        if(transactions){
            fiveTransactionGetFromFunc = getFiveData(transactions); 
        }
    },[transactions]);
    
    const [fiveTransactionData, setFiveTransaction] = useState(fiveTransactionGetFromFunc);

    return (
        <MainContainer>
            <Typography variant="h5">Transaction History</Typography>
            <Divider />
            <List>
                {
                    fiveTransactionData.map(transaction => (
                        <ParticularTransaction transaction={transaction} key={transaction._id} setTransaction={setTransaction}  transactions={transactions} />
                    ))
                }
            </List>
        </MainContainer>
    );

};
TransactionHistory.propTypes = {
    transactions: PropTypes.string.isRequired
};
TransactionHistory.propTypes = {
    setTransaction: PropTypes.func.isRequired
};

export default TransactionHistory;