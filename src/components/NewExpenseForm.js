import { Typography, Box, TextField, Button, styled } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { PropTypes } from "prop-types";
import moment from "moment"; 

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5 , & > div, & > button{
    margin-top: 30px
}
`;

const NewExpenseForm = ({ setTransaction }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const addTransaction = () => {
        const expenseTransaction = {
            id: Math.floor(Math.random()* 1000000),
            text: text,
            amount: -(+amount),
            date: new Date(value)
        };
        const dateStringForm = moment(expenseTransaction.date.toISOString()).utc().format("YYYY-MM-DD");
        const finalExpenseTransaction = {
            id: Math.floor(Math.random()* 1000000),
            text: text,
            amount: -(+amount),
            date: dateStringForm
        };
        setTransaction(prevState => [finalExpenseTransaction , ...prevState]);

    };

    const [value, setValue] = useState(dayjs("2023-01-09T21:11:54"));
    
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return(
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Expense Title" type="text" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField  label="Enter Amount"type="number" onChange={(e) => setAmount(e.target.value)}></TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker label="Date desktop" inputFormat="MM/DD/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField {...params} />}/>
            </LocalizationProvider>
            <Button variant="contained" onClick={() => addTransaction()}>Add Transaction</Button>
        </Container>
    );
};
NewExpenseForm.propTypes = {
    setTransaction: PropTypes.func.isRequired
};

export default NewExpenseForm;