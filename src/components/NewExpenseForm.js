import { Typography, Box, TextField, Button, styled } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { PropTypes } from "prop-types";

import { apiSlice } from "../store/apiSlice";

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5 , & > div, & > div{
    margin-top: 10px
}
`;

const AddButton = styled(Button)`
background-color: #2c4762;
margin-top: 30px;
&:hover{
    background-color: #021528;
}
`;

const NewExpenseForm = ({ setTransaction, setOpenExpense }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(dayjs("01/01/2023"));

    const [ addExpenseTransaction ] = apiSlice.useAddExpenseTransactionMutation();

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const addTransaction = async() => {
        const finalExpenseTransaction = {
            text: text,
            amount: -(+amount),
            date: new Date(value).toLocaleDateString()
        };
        if(!finalExpenseTransaction) return {};
        await addExpenseTransaction(finalExpenseTransaction).unwrap();
        setTransaction(prevState => [finalExpenseTransaction , ...prevState]);
    };

    const handleClick = () => {
        addTransaction();
        setOpenExpense(false);
    };

    return(
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Expense Title" type="text" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField  label="Enter Amount"type="number" onChange={(e) => setAmount(e.target.value)}></TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker views={["day"]} minDate={dayjs("01/01/2023")} maxDate={dayjs("01/31/2023")} label="Date" inputFormat="DD/MM/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField {...params} />}/>
            </LocalizationProvider>
            <AddButton variant="contained" onClick={handleClick}>Add Transaction</AddButton>
        </Container>
    );
};
NewExpenseForm.propTypes = {
    setTransaction: PropTypes.func.isRequired
};
NewExpenseForm.propTypes = {
    setOpenExpense: PropTypes.func.isRequired
};

export default NewExpenseForm;