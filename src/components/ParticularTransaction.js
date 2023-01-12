import { ListItem, ListItemText, styled, ListItemIcon, Divider } from "@mui/material";
import { PropTypes } from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";

const Details = styled(ListItem)`
    margin-top: 10px,
`;

const ParticularTransaction = ({ transaction , setTransaction, transactions  }) => {
    const color = transaction.amount > 0 ? "Green" : "Red";
    // console.log(transaction);
    // console.log(transactions);
    const deleteTransaction = (id) => {
        setTransaction(transactions.filter(transaction => transaction.id !== id));
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
                {transaction.date}
            </ListItemText>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
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