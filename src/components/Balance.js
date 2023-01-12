import { Typography, styled, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";

const BalanceText = styled(Typography)`
  font-weight: 600;
  font-size: 27px;
  & > span {
    color: #3b384c
  }
`;

const useStyles = makeStyles({});

const Balance = ({ transactions }) => {
    const classes = useStyles();

    console.log(transactions);

    const amount = transactions && transactions.map(transaction => (transaction.amount));
    const total = amount && amount.reduce((amount, item) => (amount += item), 0).toFixed(2);//to make it in 2 decimal point
    const finalTotal = total > 0 ? total : 0;

    return (
        <Box className={classes}>
            <BalanceText>Balance:<span> ₹{finalTotal}</span></BalanceText>
        </Box>
    );

};
Balance.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default Balance;