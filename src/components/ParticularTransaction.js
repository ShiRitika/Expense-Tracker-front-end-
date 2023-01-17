import { ListItem, ListItemText, styled, ListItemIcon, Divider } from "@mui/material";
import { PropTypes } from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

import { apiSlice } from "../store/apiSlice";

const Details = styled(ListItem)`
    margin-top: 10px,
`;

const ParticularTransaction = ({ transaction , setTransaction, transactions  }) => {
    const color = transaction.amount > 0 ? "Green" : "Red";

    let dateObj = new Date(transaction.date);
    let momentObj = moment(dateObj);
    let finalDate = momentObj.format("DD-MM-YYYY");

    const [ deleteIncomeTransaction ] = apiSlice.useDeleteIncomeTransactionMutation();
    const [ deleteExpenseTransaction ] = apiSlice.useDeleteExpenseTransactionMutation(); 
    const deleteTransaction = (id) => {
        if(!id) return 0;
        deleteExpenseTransaction({_id:id});
        deleteIncomeTransaction({_id:id});
        setTransaction(transactions.filter(transaction => transaction._id !== id));
    };

    return (
        <><Details style={{ borderRight: `10px solid ${color}`}}>
            <ListItemText>
                {transaction.text}
            </ListItemText>
            <ListItemText>
                {transaction.amount}
            </ListItemText>
            <ListItemText>
                {finalDate}
            </ListItemText>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction._id??"")} />
            </ListItemIcon>
        </Details><Divider /></>
    );
};
ParticularTransaction.propTypes = {
    transaction: PropTypes.string.isRequired
};
ParticularTransaction.propTypes = {
    setTransaction: PropTypes.string.isRequired
};
ParticularTransaction.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default ParticularTransaction;