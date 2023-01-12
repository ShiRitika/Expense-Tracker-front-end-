import { Typography, Divider, Box, List, styled } from "@mui/material";
import { PropTypes } from "prop-types";
import ParticularTransaction from "./ParticularTransaction";

const MainContainer = styled(Box)`
    border: 1px spolid blue;
    & > h5 {
        font-weight: 600;
        font-size: 25px;
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
    // console.log(transactions[0]);
    return (
        <MainContainer>
            <Typography variant="h5">Transaction History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <ParticularTransaction transaction={transaction} key={transaction.id} setTransaction={setTransaction} transactions={transactions} />
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