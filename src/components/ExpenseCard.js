import {Typography, Box, Card, CardContent, styled, Button} from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import NewIncomeForm from "./NewIncomeForm";
import NewExpenseForm from "./NewExpenseForm";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    "& div": {
        "& h5": {
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
        },
        "& svg": {
            position: "absolute",
            top: 10,
            right : 25,
            cursor: "pointer"
        }
    }
};

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
    margin: 0.5rem;
    box-shadow: 2px 3px 3px 4px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    & > div {
        & > button {
            background-color: #2c4762;
            padding: 4px 12px;
            margin-top: 10px;
        }
        & > button:hover{
            background-color: #1a2256;
        }
    };
`;

const useStyles = makeStyles({
    modalContainer: {
        "& div": {
            "& div": {
                "& div": {
                    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                        color: "#2c4762",
                        borderColor: "#2c4762"
                    },
                    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2c4762"
                    },
                    "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2c4762"
                    },
                    "& div": {
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "grey",
                        "& div": {
                            "& button": {
                                color: "#2c4762",
                                padding: "20px 35px"
                            },
                        },
                    },
                },
            },
        },
    }
});

const ExpenseCard = ({ transactions, setTransaction }) => {
    const classes = useStyles();
    const amount = transactions.map((transaction) => transaction.amount);
    const income = amount.filter((item) => item > 0);
    const totalIncome = income.reduce((amount, item) => (amount += item), 0).toFixed(2);
    const expense = amount.filter((item) => item < 0);
    const totalExpense = (expense.reduce((amount, item) => (amount += item), 0) * -1).toFixed(2);
    
    const [openIncome, setOpenIncome] = useState(false);
    const handleOpenIncomeModal = () => setOpenIncome(true);
    const handleCloseIncomeModal = () => setOpenIncome(false);

    const [openExpense, setOpenExpense] = useState(false);
    const handleOpenExpenseModal = () => setOpenExpense(true);
    const handleCloseExpenseModal = () => setOpenExpense(false);

    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography style={{ fontWeight: "bold", color: "#6e6060" }}>Income</Typography>
                    <Typography style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>₹ {totalIncome}</Typography>
                    <Button variant="contained" onClick={handleOpenIncomeModal}>Add Income</Button>
                    <Modal className={classes.modalContainer} open={openIncome} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Box>
                                <CloseIcon onClick={handleCloseIncomeModal} />
                            </Box>
                            <NewIncomeForm setTransaction={setTransaction} setOpenIncome={setOpenIncome} />
                        </Box>
                    </Modal>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography style={{ fontWeight: "bold", color: "#6e6060" }}>Expense</Typography>
                    <Typography style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>₹ {totalExpense}</Typography>
                    <Button variant="contained" onClick={handleOpenExpenseModal}>Add Expense</Button>
                    <Modal className={classes.modalContainer} open={openExpense} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Box>
                                <CloseIcon onClick={handleCloseExpenseModal} />
                            </Box>
                            <NewExpenseForm setTransaction={setTransaction} setOpenExpense={setOpenExpense} />
                        </Box>
                    </Modal>
                </CardContent>
            </Card>
        </Container>
    );
};
ExpenseCard.propTypes = {
    transactions: PropTypes.array.isRequired,
};
ExpenseCard.propTypes = {
    setTransaction: PropTypes.func.isRequired,
};

export default ExpenseCard;
