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
    margin-top: 10px;
}
`;
const AddButton = styled(Button)`
background-color: #2c4762;
margin-top: 30px;
&:hover{
    background-color: #021528;
}
`;

const NewIncomeForm = ({ setTransaction, setOpenIncome  }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(dayjs("01/01/2023"));

    const [ addIncomeTransaction ] = apiSlice.useAddIncomeTransactionMutation();
    
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const addTransaction = async() => {
        let finalIncomeTransaction = {
            text: text,
            amount: +amount,//add plus to make it number type
            date: new Date(value).toLocaleDateString()
        };
        if(!finalIncomeTransaction) return {};
        await addIncomeTransaction(finalIncomeTransaction).unwrap();
        setTransaction(prevState => [finalIncomeTransaction, ...prevState]);
    };
    const handleClick = () => {
        addTransaction();
        setOpenIncome(false);
    };

    return(
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Income Title" type="text" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField  label="Enter Amount" type="number" onChange={(e) => setAmount(e.target.value)}></TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker views={["day"]} minDate={dayjs("01/01/2023")} maxDate={dayjs("01/31/2023")} label="Date" inputFormat="DD/MM/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField {...params} />}/>
            </LocalizationProvider>
            <AddButton variant="contained" onClick={handleClick}>Add Transaction</AddButton>
        </Container>
    );
};
NewIncomeForm.propTypes = {
    setTransaction: PropTypes.func.isRequired
};
NewIncomeForm.propTypes = {
    setOpenIncome: PropTypes.func.isRequired
};

export default NewIncomeForm;