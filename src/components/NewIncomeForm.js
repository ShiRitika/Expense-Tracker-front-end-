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

const NewIncomeForm = ({ setTransaction }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(dayjs("2023-01-09T21:11:54"));
    
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const addTransaction = () => {
        const incomeTransaction = {
            id: Math.floor(Math.random()* 1000000),
            text: text,
            amount: +amount,//add plus to make it number type
            date: new Date(value)
        };
        const dateStringForm = moment(incomeTransaction.date.toISOString()).utc().format("YYYY-MM-DD");
        const finalIncomeTransaction = {
            id: Math.floor(Math.random()* 1000000),
            text: text,
            amount: +amount,//add plus to make it number type
            date: dateStringForm
        };
        setTransaction(prevState => [finalIncomeTransaction, ...prevState]);
    };

    return(
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Income Title" type="text" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField  label="Enter Amount" type="number" onChange={(e) => setAmount(e.target.value)}></TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker label="Date" inputFormat="MM/DD/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField {...params} />}/>
            </LocalizationProvider>
            <Button variant="contained" onClick={() => addTransaction()}>Add Transaction</Button>
        </Container>
    );
};
NewIncomeForm.propTypes = {
    setTransaction: PropTypes.func.isRequired
};

export default NewIncomeForm;