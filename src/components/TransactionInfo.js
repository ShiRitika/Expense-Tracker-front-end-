import {  Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContent: {
        marginTop: "1rem",
        "& p": {
            color: "#7ac98b",
            backgroundColor: "black"
        }
    },
});

const TransactionInfo = ({ transaction }) => {
    const classes = useStyles();

    let dateObj = new Date(transaction.date);
    let momentObj = moment(dateObj);
    let finalDate = momentObj.format("DD-MM-YYYY");

    return (
        <div  className={classes.gridContent}>
            <Typography variant="h6" component="p" color="text.secondary">
            Transaction Name: {transaction.text}
            </Typography>
            <Typography variant="h6" component="p" color="text.secondary">
            Transaction Amout: {transaction.amount}
            </Typography>
            <Typography variant="h6" component="p" color="text.secondary">
            Transaction on: {finalDate}
            </Typography>
        </div>
    );
};
TransactionInfo.propTypes = {
    transaction: PropTypes.object.isRequired
};

export default TransactionInfo;